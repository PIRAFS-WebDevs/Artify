"use client";

import React, { useContext } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import AllProductContext from "@/context/AllProductContext";

const ProductUIProduct = () => {
  const { products } = useContext(AllProductContext);

  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        {products?.map((product, index) => (
          <TableRow key={index}>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductUIProduct;
