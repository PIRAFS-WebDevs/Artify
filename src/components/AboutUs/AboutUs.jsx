import Link from "next/link";
import { AiOutlineAppstoreAdd, AiOutlineGlobal } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { GiExpense } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

const AboutUs = () => {
  return (
    <div className="max-w-6xl min-h-screen px-4 py-20 mx-auto space-y-10 md:space-y-16">
      <div className="grid gap-2 place-items-center">
        <h1 className="text-xl font-semibold dark:text-white">About Us</h1>
        <p className="text-sm font-semibold text-dark-100">
          Learn in details about us
        </p>
      </div>

      <div className="space-y-2">
        <h1 className="font-semibold dark:text-white">
          To help each other is human nature.
        </h1>
        <p className="text-sm leading-6 text-dark-100">
          Imagine, every single day from rookie to a professional graphic
          designer around the world doing their best to create an excellent
          design to help the fellow graphic designers. Here at Pixer, we collect
          and distribute the best and latest design ranging from fonts, mockups,
          graphics, template and more that are meant to be useful for everyone.
          Also, at the same time, we are gladly promoting awesome design of the
          author from various fields so you can find all those hard works all at
          once.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <h1 className="grid gap-2 dark:text-white place-items-center">
          <span className="dark:bg-dark-300 bg-light-500 rounded-sm text-primary w-full h-[12rem] grid place-items-center">
            <AiOutlineAppstoreAdd size={"4rem"} />
          </span>
          App Development
        </h1>
        <h1 className="grid gap-2 dark:text-white place-items-center">
          <span className="dark:bg-dark-300 bg-light-500 rounded-sm text-primary w-full h-[12rem] grid place-items-center">
            <GiExpense size={"4rem"} />
          </span>
          Design & Research
        </h1>
        <h1 className="grid gap-2 dark:text-white place-items-center">
          <span className="dark:bg-dark-300 bg-light-500 rounded-sm text-primary w-full h-[12rem] grid place-items-center">
            <HiOutlineLightBulb size={"4rem"} />
          </span>
          Research & Development
        </h1>
        <h1 className="grid gap-2 dark:text-white place-items-center">
          <span className="dark:bg-dark-300 bg-light-500 rounded-sm text-primary w-full h-[12rem] grid place-items-center">
            <BsTools size={"4rem"} />
          </span>
          Custom Management
        </h1>
        <h1 className="grid gap-2 dark:text-white place-items-center">
          <span className="dark:bg-dark-300 bg-light-500 rounded-sm text-primary w-full h-[12rem] grid place-items-center">
            <AiOutlineGlobal size={"4rem"} />
          </span>
          Global Support
        </h1>
      </div>

      <div className="space-y-2">
        <h1 className="font-semibold dark:text-white">
          Got something to share?
        </h1>
        <p className="text-sm leading-6 text-dark-100">
          We are born from the pain we had in finding great, usable imagery. And
          we weren’t alone. Which is why, today—millions of creators from around
          the world have downloaded over 2 billion assets to create
          presentations, artwork, mockups. More than 80.00+ subscribers are
          waiting for your assets! Submit your assets and get more exposure to
          your works. We’d be happy to feature it on our site. Please use this
          form to do so. Pixer is a buffet of premium quality design resources
          offered for free to the community. Here you’ll find exclusive PSD
          files “cooked” in-house along with featured top-notch freebies from
          creatives around the world.
        </p>
      </div>

      <div className="py-10 border-y border-dark-200">
        <h1 className="pb-10 text-xl font-semibold dark:text-white">
          Meet our team
        </h1>
        <div className="grid grid-cols-2 gap-8 place-items-center md:grid-cols-3">
          {[1, 2, 3, , 4, 5, 6].map((e, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 lg:flex-row"
            >
              <div className="inline-block rounded-full dark:bg-dark-300 bg-light-500">
                <img
                  src="https://pixer.redq.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.845a3ecb.png&w=2048&q=100"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="space-y-1 text-center lg:text-start">
                <h1 className="font-semibold dark:text-white">Elna Maggio</h1>
                <p className="text-sm text-dark-100">
                  User Experience Designer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="font-semibold dark:text-white">
          To help each other is human nature.
        </h1>
        <p className="text-sm leading-6 text-dark-100">
          We are always happy to chat. A good way to reach us here.{" "}
          <Link
            href={"/contact"}
            className="underline dark:text-white hover:text-primary"
          >
            Contact Us
          </Link>
        </p>
      </div>

      <div className="grid place-items-center">
        <p className="text-sm text-dark-100">
          ©2025 Artify. Copyright © REDQ. All rights reserved worldwide. REDQ
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
