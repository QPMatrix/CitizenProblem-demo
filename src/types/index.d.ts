import { ColumnDef } from "@tanstack/react-table";

export type Problem = {
  id: number;
  title: string;
  description: string;
  images: string[];
  createdAt: Date | string;
  submitBy: string;
};
export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
