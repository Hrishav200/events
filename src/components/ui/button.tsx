import { cn } from "../../../helper/cn";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  className?: string;
  variant?: "outline" | "solid";
  color?: "amber" | "hot" | "teal" | "success" | "blue" | "offwhite" | "muted";
  startContent?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  endContent?: React.ReactNode;
}

export default function Button({
  label,
  className,
  variant = "solid",
  color = "amber",
  size = "md",
  disabled = false,
  onClick,
  as = "button",
  href,
  startContent,
  endContent,
}: ButtonProps) {
  const Tag = as;
  const borderClass = {
    amber: "border-amber",
    hot: "border-hot",
    teal: "border-teal",
    success: "border-[rgba(37,211,102,0.4)]",
    blue: "border-[rgba(24,119,242,0.4)]",
    offwhite: "border-[rgba(240,240,240,0.2)]",
    muted: "border-border",
  };

  const bgClass = {
    amber: "bg-amber",
    hot: "bg-hot",
    teal: "bg-teal",
    success: "bg-[#25d366]",
    blue: "bg-[#4a90d9]",
    offwhite: "bg-offwhite",
    muted: "bg-muted",
  };

  const textClass = {
    amber: "text-amber",
    hot: "text-hot",
    teal: "text-teal",
    success: "text-[#25d366]",
    blue: "text-[#4a90d9]",
    offwhite: "text-offwhite",
    muted: "text-muted",
  };

  const sizeClass = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const hoverClass = {
    amber: "hover:bg-amber hover:text-surface",
    hot: "hover:bg-hot hover:text-surface",
    teal: "hover:bg-teal hover:text-surface",
    success: "hover:bg-transparent",
    blue: "hover:bg-transparent",
    offwhite: "hover:bg-transparent",
    muted: "hover:bg-transparent",
  };

  return (
    <motion.div
      whileHover="hovered"
      variants={{
        hovered: {
          scale: 1.05,
        },
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Tag
        href={href}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "rounded-sm border font-medium transition-opacity duration-200 cursor-pointer flex flex-row gap-2 items-center justify-center",
          sizeClass[size],
          borderClass[color],
          variant === "solid"
            ? `${bgClass[color]} text-bg`
            : `bg-transparent ${textClass[color]} ${hoverClass[color]}`,
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {startContent}
        {label}
        {endContent}
      </Tag>
    </motion.div>
  );
}
