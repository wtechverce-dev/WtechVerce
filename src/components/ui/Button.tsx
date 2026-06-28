"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  filled?: boolean; // when true: always shows gradient, no hover animation
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
  filled = false,
}: ButtonProps) {

  const sizes = {
    sm: "px-6 py-2.5 text-sm gap-2",
    md: "px-8 py-4 text-base gap-3",
    lg: "px-10 py-5 text-lg gap-3",
  };

  // Filled buttons: always gradient background, no hover effect
  if (filled) {
    const filledStyles = [
      "relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden",
      "bg-gradient-to-r from-[#FD4F00] to-[#6C24FA] text-white",
      sizes[size],
      className,
    ].filter(Boolean).join(" ");

    const content = (
      <button type={type} onClick={onClick} disabled={disabled} className={filledStyles}>
        <span className="relative z-10 flex items-center justify-center" style={{ gap: "inherit" }}>
          {children}
        </span>
      </button>
    );

    if (href) return <Link href={href} className="inline-block">{content}</Link>;
    return content;
  }

  // Hover buttons: transparent + slide-in gradient on hover
  const baseStyles = [
    "relative inline-flex items-center justify-center font-bold rounded-full",
    "transition-colors overflow-hidden group",
    "bg-transparent border border-white text-white hover:border-transparent",
    sizes[size],
    className,
  ].filter(Boolean).join(" ");

  const content = (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles}>
      {/* Slide-in gradient from left on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#FD4F00] to-[#6C24FA] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      <span className="relative z-10 flex items-center justify-center" style={{ gap: "inherit" }}>
        {children}
      </span>
    </button>
  );

  if (href) return <Link href={href} className="inline-block">{content}</Link>;
  return content;
}
