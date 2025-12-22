// src/components/ui/Button.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    href?: string;
    external?: boolean;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    href,
    external = false,
    className,
    ...props
}: ButtonProps) {
    const baseStyles = "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

    const getVariantStyles = () => {
        switch (variant) {
            case "primary":
                return "shadow-md hover:shadow-lg hover:opacity-90";
            case "secondary":
                return "shadow-md hover:shadow-lg hover:opacity-90";
            case "outline":
                return "border-2 hover:text-white";
            default:
                return "";
        }
    };

    const getVariantColors = () => {
        switch (variant) {
            case "primary":
                return { backgroundColor: '#00577d', color: '#ffffff' };
            case "secondary":
                return { backgroundColor: '#8ad3f2', color: '#00577d' };
            case "outline":
                return { borderColor: '#00577d', color: '#00577d', backgroundColor: 'transparent' };
            default:
                return {};
        }
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, getVariantStyles(), sizes[size], className);
    const styles = getVariantColors();

    if (href) {
        return (
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={classes}
                style={styles}
            >
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} style={styles} {...props}>
            {children}
        </button>
    );
}