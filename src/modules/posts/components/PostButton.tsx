import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export interface PostButtonProps {
  children: React.ReactNode;
  href: string;
}

const anchorClass =
  "w-full flex flex-row border border-zinc-500 text-zinc-100 font-semibold rounded-lg p-4 items-center gap-2 hover:border-zinc-100";

export const PreviousPostButton = ({ children, href }: PostButtonProps) => {
  return (
    <a href={href} className={anchorClass}>
      <BsArrowLeftShort className="text-4xl shrink-0" />

      <div className="flex flex-col flex-1">
        <span className="text-zinc-400 text-sm">Previous</span>
        {children}
      </div>
    </a>
  );
};

export const NextPostButton = ({ children, href }: PostButtonProps) => {
  return (
    <a href={href} className={`${anchorClass} justify-end text-right`}>
      <div className="flex flex-col">
        <span className="text-zinc-400 text-sm">Next</span>
        {children}
      </div>

      <BsArrowRightShort className="text-4xl shrink-0" />
    </a>
  );
};
