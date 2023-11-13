"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BiShow } from 'react-icons/bi'

export default function Password() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfrimPasswordVisible, setIsConfrimPasswordVisible] = useState(false);
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <div>Change Password</div>

            <form className='flex flex-grow flex-col '>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                        <label
                            htmlFor="Current-Password"
                            className="mb-2 inline-block text-sm text-white sm:text-base"
                        >
                            Current Password
                        </label>
                        <div className='relative'>
                            <input type={isPasswordVisible ? 'text' : 'password'}
                                {...register("currentPassword", {
                                    required: "Current Password is required",
                                })}
                                id="Current Password"
                                className={`w-full rounded border ${errors.currentPassword && "border-red-400 focus:border-red-400"
                                    } focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100`}
                            />
                            <p
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={()=> setIsPasswordVisible(!isPasswordVisible)}
                            >
                                {isPasswordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </p>

                        </div>
                        {errors.currentPassword && (
                            <p className="text-red-400 text-sm mt-1">
                                *{errors.currentPassword.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="New-Password"
                            className="mb-2 inline-block text-sm text-white sm:text-base"
                        >
                            New Password
                        </label>
                        <div className='relative'>
                        <input type={isNewPasswordVisible ? 'text' : 'password'}
                            {...register("newPassword")}
                            id="New-Password"
                            className={`w-full rounded border focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100`}
                        />
                         <p
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={()=> setIsNewPasswordVisible(!isNewPasswordVisible)}
                            >
                                {isPasswordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </p>

                        </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-2 mt-5 gap-4'>
                    <div >
                        <label
                            htmlFor="Confirm-Password"
                            className="mb-2 inline-block text-sm text-white sm:text-base"
                        >
                            Confirm Password
                        </label>
                        <div className='relative'>
                        <input
                            {...register("confirmPassword", {
                                required: "confirmPassword is required",
                            })}
                            id="Confirm-Password"
                            type={isConfrimPasswordVisible ? 'text' : 'password'}
                            className={`w-full ${errors.confirmPassword && "border-red-400 focus:border-red-400"
                                } rounded border focus:border-primary bg-transparent px-3 py-2 text-white outline-none transition duration-100`}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-400 text-sm mt-1">
                                *{errors.confirmPassword.message}
                            </p>
                        )}
                         <p
                                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                onClick={()=> setIsConfrimPasswordVisible(!isConfrimPasswordVisible)}
                            >
                                {isConfrimPasswordVisible ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                )}
                            </p>
                            
                        </div>
                       
                    </div>

                </div>

                <div className='flex items-center gap-4 justify-end mt-[250px]'>
                    <button
                        type="submit"
                        className="block rounded-lg border border-dark-200 px-8 py-3 text-center text-sm font-semibold text-white outline-none transition-all duration-100 hover:bg-gray-700 md:text-base active:scale-95"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none transition-all duration-100 hover:bg-primarySec md:text-base active:scale-95"
                    >
                        Save Changes
                    </button>
                </div>


            </form>

        </div>


    )
}
