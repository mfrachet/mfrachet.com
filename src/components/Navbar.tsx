import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Navbar = () => {
  const anchorClass =
    "pl-4 pr-6 py-2 inline-flex items-center gap-2 text-xs md:text-xl text-white bg-slate-800 rounded-full hover:bg-slate-700 active:bg-slate-600";

  return (
    <nav className="flex justify-center md:justify-end pt-4">
      <ul className="flex flex-row gap-4">
        <li>
          <a
            className={anchorClass}
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mfrachet"
          >
            <AiOutlineTwitter /> Twitter
          </a>
        </li>
        <li>
          <a
            className={anchorClass}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/marvin-frachet-49165365/"
          >
            <AiOutlineLinkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className={anchorClass}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mfrachet"
          >
            <AiOutlineGithub /> Github
          </a>
        </li>
      </ul>
    </nav>
  );
};
