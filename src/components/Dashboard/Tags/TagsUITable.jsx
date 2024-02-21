"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
} from "@nextui-org/react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { useQuery } from "@tanstack/react-query";
import { getTags } from "@/utils/api/tags";
import AllProductContext from "@/context/AllProductContext";

const INITIAL_VISIBLE_COLUMNS = ["name", "slug", "actions"];

export default function TagsUITable() {
  const { handelAction } = useContext(AllProductContext);
  const {
    data: tags = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTags(),
  });

  const [filterValue, setFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const columns = [
    { uid: "name", name: "Name", sortable: true },
    { uid: "slug", name: "Slug", sortable: true },
    { uid: "actions", name: "Actions", sortable: false }, // Add this line
  ];

  const headerColumns = useMemo(() => {
    if (visibleColumns.has("all")) return columns;

    return columns.filter((column) => visibleColumns.has(column.uid));
  }, [visibleColumns, columns]);

  const filteredItems = useMemo(() => {
    let filteredTags = [...tags];

    if (hasSearchFilter) {
      filteredTags = filteredTags.filter((tags) =>
        tags.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredTags;
  }, [tags, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((tags, columnKey) => {
    const cellValue = tags[columnKey];

    switch (columnKey) {
      case "name":
        return cellValue;
      case "slug":
        return cellValue;
      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <HiDotsVertical className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  onClick={() =>
                    handelAction(
                      "edit",
                      tags?._id,
                      "/admin/tags/tags-delate/",
                      "Tag",
                      "/tag/",
                      "/dashboard/admin/tags/upload/"
                    )
                  }
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handelAction(
                      "delete",
                      tags?._id,
                      "/admin/tags/tags-delate/",
                      "Tag",
                      "/tag/",
                      "/dashboard/admin/tags/upload/"
                    )
                  }
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<FaSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-default-400 text-small">
            Total {tags.length} tags
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onRowsPerPageChange,
    tags.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Table with custom cells, pagination, and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      className="scrollbar"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align="start"
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No tags found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.slug}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
