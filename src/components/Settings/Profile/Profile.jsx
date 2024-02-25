"use client";

import { storage } from "@/config/firebaseConfig";
import useUpdateUser from "@/hooks/user/useUpdateUser";
import { useUser } from "@/hooks/user/useUser";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Profile = () => {
  const router = useRouter();
  const { data: user = {} } = useUser();
  const { mutateAsync: updateUser, isSuccess } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (user && user._id) {
      setValue("name", user.name);
      setValue("phoneNumber", user?.phoneNumber);
      setValue("bio", user?.bio);
    }
  }, [user, setValue]);

  useEffect(() => {
    toast.success("Update user successfully");
  }, [isSuccess]);

  const handleImage = async (event) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      try {
        const name = `${selectedFile.name}_${new Date().getTime()}`;
        const imageRef = ref(storage, `avatar/${name}`);
        const snapshot = await uploadBytes(imageRef, selectedFile);
        const imgUrl = await getDownloadURL(snapshot.ref);

        updateUser({ ...user, imgUrl });
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const formHandler = (data) => {
    updateUser({ ...user, ...data });
  };

  return (
    <div className="mb-20 space-y-6 text-dark-100">
      <p className="dark:text-white text-dark-500">Personal Information</p>

      <form
        onSubmit={handleSubmit(formHandler)}
        className="flex flex-col gap-6"
      >
        <div className="space-y-2">
          <p className="text-sm cursor-default">Avatar</p>
          <label
            htmlFor="dropzone-file"
            className="flex items-center justify-center px-4 py-16 mx-auto text-center border border-dashed rounded-sm cursor-pointer border-dark-100"
          >
            <p className="text-xs">Upload Your Avatar Image (80 X 80)</p>

            <input
              onChange={handleImage}
              accept="image/jpeg, image/png"
              id="dropzone-file"
              type="file"
              className="hidden w-full"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              {...register("name", {
                required: "name is required",
              })}
              id="name"
              type="name"
              className={`w-full ${
                errors.name && "border-red-400 focus:border-red-400"
              } rounded-sm border border-dark-100 focus:border-primary bg-transparent px-3 py-2 dark:text-white text-dark-500 outline-none transition-all duration-200`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="contact" className="text-sm">
              Contact
            </label>
            <input
              {...register("phoneNumber", {
                required: "contact is required",
                pattern: {
                  value: /^[0-9+\\-]+$/,
                  message: "invalid contact number",
                },
                minLength: { value: 7, message: "*invalid contact number" },
                maxLength: { value: 15, message: "*invalid contact number" },
              })}
              type="text"
              id="contact"
              className={`w-full rounded-sm border border-dark-100 focus:border-primary bg-transparent px-3 py-2 dark:text-white text-dark-500 outline-none transition-all duration-200 ${
                errors.phoneNumber && "border-red-400 focus:border-red-400"
              }`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-400">
                *{errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="w-full col-span-2">
            <label htmlFor="bio" className="inline-block mb-2 text-sm">
              Bio
            </label>
            <textarea
              {...register("bio")}
              id="bio"
              rows={5}
              className={`w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-100 focus:border-primary dark:text-white text-dark-500 resize-none ${
                errors.bio && "border-red-400 focus:border-red-400"
              }`}
            ></textarea>
          </div>
        </div>
        <div className="absolute self-end bottom-8">
          <div className="space-x-4">
            <button
              onClick={() => router.back()}
              className="px-4 py-3 text-sm font-semibold transition-all duration-200 bg-transparent border rounded-sm text-primary border-dark-200 dark:hover:bg-dark-200 hover:bg-light-300 active:scale-95"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-3 text-sm font-semibold text-white transition-all duration-200 rounded-sm bg-primary hover:bg-primarySec active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
