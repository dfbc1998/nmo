// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "USD"): string {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: currency,
    }).format(price);
}