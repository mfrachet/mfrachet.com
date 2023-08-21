import { forwardRef } from "react";
import { BsChevronRight } from "react-icons/bs";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export const Link = forwardRef(
  ({ children, href, target }: LinkProps, ref: any) => {
    return (
      <a
        ref={ref}
        href={href}
        className="group text-stone-300 hover:text-white inline-flex flex-row items-center gap-1"
        target={target}
      >
        <span className="border-b border-stone-300 group-hover:border-b-white">
          {children}
        </span>
        <BsChevronRight
          aria-hidden
          className="group-hover:translate-x-2 transition-all"
        />
      </a>
    );
  }
);
