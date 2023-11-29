"use client";
import ClassNames from "@/utils/ClassNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsDot } from "react-icons/bs";

const HelpNavLink = ({
  href,
  title,
  icon,
  activeClassName,
  exact = false,
  ...props
}) => {
  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);
  const classes = ClassNames(props.className, active && activeClassName);
  if (classes) {
    props.className = classes;
  }
  return (
    <div className="cursor-pointer hover:dark:text-white block">
      <Link href={href} {...props}>
        <p className="flex gap-2 items-center ">
          <span className={`${active ? "visible" : "invisible"} `}>
            <BsDot className="text-primary text-2xl" />
          </span>
          <span className="col-span-4 text-dark-500 dark:text-white">{title}</span>
        </p>
      </Link>
    </div>
  );
};

export default HelpNavLink;
