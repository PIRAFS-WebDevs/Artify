"use client";

import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { BackgroundImage, MantineProvider } from "@mantine/core";
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

  // const table = useMantineReactTable({
  //   columns,
  //   data,
  //   enableColumnActions: false,
  //   enableColumnFilters: false,
  //   enablePagination: false,
  //   enableSorting: false,
  //   mantineTableProps: {
  //     highlightOnHover: false,
  //     withColumnBorders: true,
  //     withBorder: colorScheme === "light",
  //     style: {
  //       "thead > tr": {
  //         backgroundColor: "inherit",
  //       },
  //       "thead > tr > th": {
  //         backgroundColor: "inherit",
  //       },
  //       "tbody > tr > td": {
  //         backgroundColor: "inherit",
  //       },
  //     },
  //   },
  // });

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
        mantineTableProps={{
          style: {
            "thead > tr": {
              backgroundColor: "red",
            },
            "thead > tr > th": {
              backgroundColor: "red",
            },
            "tbody > tr > td": {
              backgroundColor: "red",
            },
          },
        }}
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
