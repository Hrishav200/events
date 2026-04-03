import { cn } from "../../../helper/cn";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  font?: "bebas" | "dmsans";
  fontWeight?: "light" | "regular" | "medium" | "bold";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

export default function Text({
  children,
  className,
  as = "p",
  font = "dmsans",
  fontWeight = "regular",
  size = "base",
}: TextProps) {
  const Tag = as;

  const fontClass = {
    bebas: "font-display",
    dmsans: "font-sans",
  };

  const weightClass = {
    light: "font-light",
    regular: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
  };

  const sizeClass = {
    xs: "text-xs",
    sm: "sm:text-sm",
    base: "sm:text-sm md:text-base",
    lg: "sm:text-base md:text-lg",
    xl: "sm:text-lg md:text-xl",
    "2xl": "text-xl md:text-2xl",
    "3xl": "text-2xl md:text-3xl",
    "4xl": "text-3xl md:text-4xl",
    "5xl": "text-4xl md:text-5xl",
    "6xl": "text-5xl md:text-6xl",
    "7xl": "text-6xl md:text-7xl",
    "8xl": "text-7xl md:text-8xl",
    "9xl": "text-8xl md:text-9xl",
  };

  return (
    <Tag
      className={cn(
        fontClass[font],
        weightClass[fontWeight],
        sizeClass[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
