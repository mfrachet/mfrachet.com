import { useId } from "react";

export interface SideProjectProps {
  children: React.ReactNode;
  title: string;
  href: string;
  logo: React.ReactNode;
  cta?: React.ReactNode;
}

export const SideProject = ({
  title,
  href,
  logo,
  children,
  cta,
}: SideProjectProps) => {
  const id = useId();
  return (
    <article
      aria-labelledby={id}
      className="border bg-gray-800 border-gray-700 rounded-lg flex flex-col md:flex-row gap-4 md:gap-8 bg-slate-800 rounded-lg px-8 py-12"
    >
      <div>{logo}</div>
      <div>
        <h3 id={id} className="text-4xl text-slate-50 pb-2 font-bold">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {title}
          </a>
        </h3>
        {children}
        {cta && <div className="flex flex-row pt-4">{cta}</div>}
      </div>
    </article>
  );
};
