import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateTime = (date: Date | string): string => {
  const formatter = new Intl.DateTimeFormat("he-IL", { dateStyle: "short" });
  return formatter.format(new Date(date));
};
