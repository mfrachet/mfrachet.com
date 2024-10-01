import { BsChevronLeft } from "react-icons/bs";

export interface BackLinkProps {
  children: React.ReactNode;
  href: string;
}

export const BackLink = ({ children, href }: BackLinkProps) => {
  return (
    <a
      href={href}
      className="group text-zinc-300 hover:text-white inline-flex flex-row items-center gap-1"
    >
      <BsChevronLeft
        aria-hidden
        className="group-hover:-translate-x-2 transition-all"
      />
      <span className="border-b border-zinc-300 group-hover:border-b-white">
        {children}
      </span>
    </a>
  );
};
