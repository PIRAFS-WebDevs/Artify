"use client";

import ClassNames from "@/utils/ClassNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <div className="block cursor-pointer hover:dark:text-light-100">
      <Link href={href} {...props}>
        <p className="flex items-center gap-2 ">
          <span className={`${active ? "visible" : "invisible"} `}>
            <BsDot className="text-2xl text-primary" />
          </span>
          <span className="col-span-4 text-dark-500 dark:text-light-100">
            {title}
          </span>
        </p>
      </Link>
    </div>
  );
};

export default HelpNavLink;
