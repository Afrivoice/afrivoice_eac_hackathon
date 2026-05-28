"use client";

import {
  flexRender,
  useReactTable,
  type ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

// Components
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { Skeleton } from "./ui/skeleton";

interface DataTableProps<TData, TValue> {
  data: TData[];
  pageSize?: number;
  isLoading?: boolean;
  columns: ColumnDef<TData, TValue>[];
}

interface TableSkeletonProps {
  rows: number;
  columns: number;
}

export const TableSkeleton = ({ columns, rows }: TableSkeletonProps) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex} className="bg-sidebar">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex} className="border-l border-border">
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export function DataTable<TData, TValue>({
  data,
  columns,
  pageSize = 15,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
  });

  return (
    <div className="w-full space-y-4">
      <div className="rounded-md border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <Table border={1} className="min-w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      style={{
                        height: "50px",
                        minWidth: "200px",
                        width: `${100 / headerGroup.headers.length}%`,
                      }}
                      className="border-l border-border font-black p-4"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{
                          height: "auto",
                          minHeight: "50px",
                          minWidth: "200px",
                          width: `${100 / row.getVisibleCells().length}%`,
                        }}
                        className="border-l border-border p-4 whitespace-normal break-words"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
