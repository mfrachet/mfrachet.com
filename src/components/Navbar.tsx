import type { HTMLAttributes } from "react";
import { Text } from "./Text";

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  target?: "_blank";
  rel?: "noopener noreferrer";
}
const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <a
      className="text-sm md:text-base text-white px-4 py-2 text-zinc-50 font-semibold hover:text-white hover:bg-zinc-800 rounded-lg text-lg transition-all focus:bg-zinc-800 focus:text-white"
      {...props}
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-col md:flex-row items-center justify-between absolute top-16 left-0 right-0 z-10"
    >
      <a href="/" className="pb-8 md:pb-0">
        <Text className="text-2xl border-b-2 border-white pb-1" as="span">
          @mfrachet
        </Text>
      </a>

      <ul className="flex flex-row gap-2 md:gap-4 items-center">
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>

        <li>
          <NavLink
            href="https://github.com/mfrachet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </NavLink>
        </li>

        <li>
          <NavLink
            href="https://twitter.com/mfrachet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
