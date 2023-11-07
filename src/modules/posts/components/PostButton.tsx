import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs/index";

export interface PostButtonProps {
  children: React.ReactNode;
  href: string;
}

const anchorClass =
  "w-full flex flex-row border border-stone-500 text-stone-100 font-semibold rounded-lg p-4 items-center gap-2 hover:border-stone-100";

export const PreviousPostButton = ({ children, href }: PostButtonProps) => {
  return (
    <a href={href} className={anchorClass}>
      <BsArrowLeftShort className="text-4xl shrink-0" />

      <div className="flex flex-col flex-1">
        <span className="text-stone-400 text-sm">Previous</span>
        {children}
      </div>
    </a>
  );
};

export const NextPostButton = ({ children, href }: PostButtonProps) => {
  return (
    <a href={href} className={`${anchorClass} justify-end text-right`}>
      <div className="flex flex-col">
        <span className="text-stone-400 text-sm">Next</span>
        {children}
      </div>

      <BsArrowRightShort className="text-4xl shrink-0" />
    </a>
  );
};
