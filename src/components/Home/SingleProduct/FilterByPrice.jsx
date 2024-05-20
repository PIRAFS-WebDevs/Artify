"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { BiChevronDown } from "react-icons/bi";

const FilterByPrice = () => {
  return (
    <>
      <div className="flex items-center justify-between h-16 border-b dark:dark:text-light-100 dark:border-dark-300 border-light-500">
        <p className="text-lg">Product Reviews</p>

        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="faded"
              className="px-12 bg-transparent rounded-none border-1"
            >
              Recent
              <BiChevronDown size={20} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New</DropdownItem>
            <DropdownItem key="featured">Featured</DropdownItem>
            <DropdownItem key="high">High to low</DropdownItem>
            <DropdownItem key="low">Low to hight</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default FilterByPrice;
