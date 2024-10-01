import { forwardRef } from "react";
import { BsChevronRight } from "react-icons/bs";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  variant?: "dark" | "light";
}

const variantClasses = {
  light: {
    text: "text-zinc-800 hover:text-zinc-900",
    border: "border-zinc-800 group-hover:border-zinc-900",
  },
  dark: {
    text: "text-zinc-300 hover:text-white",
    border: " border-zinc-300 group-hover:border-b-white",
  },
};

export const Link = forwardRef(
  ({ children, href, target, variant = "dark" }: LinkProps, ref: any) => {
    const variantClass = variantClasses[variant];
    return (
      <a
        ref={ref}
        href={href}
        className={`font-semibold group inline-flex flex-row items-center gap-1 ${variantClass.text}`}
        target={target}
      >
        <span className={`border-b ${variantClass.border}`}>{children}</span>
        <BsChevronRight
          aria-hidden
          className="group-hover:translate-x-2 transition-all"
        />
      </a>
    );
  }
);
