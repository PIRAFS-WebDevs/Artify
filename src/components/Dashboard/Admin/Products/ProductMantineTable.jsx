"use client";

import { MantineReactTable } from "mantine-react-table";
import { MantineProvider } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/api/product";
import "./ProductTable.css";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "layout",
    header: "Layout",
  },
];

const ProductMantineTable = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return (
    <MantineProvider
      theme={{
        primaryColor: "teal",
        primaryShade: 8,
        // white: "#3e3e3e",
        // black: "#ffffff",
      }}
    >
      <MantineReactTable
        columns={columns}
        data={products?.products || []}
        enableRowSelection
        enableColumnOrdering
        enablePinning
      />
    </MantineProvider>
  );
};

export default ProductMantineTable;
