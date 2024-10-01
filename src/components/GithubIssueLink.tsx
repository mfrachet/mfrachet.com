import { MdOutlineModeEditOutline } from "react-icons/md";

export interface GithubIssueLinkProps {
  title: string;
  body: string;
}

export const GithubIssueLink = ({ title, body }: GithubIssueLinkProps) => {
  return (
    <a
      href={`https://github.com/mfrachet/mfrachet.com/issues/new?title=${title}&assignee=mfrachet&body=${body}`}
      target="_blank"
      className="inline-flex gap-1 flex-row items-center text-zinc-400 text-sm hover:underline hover:text-zinc-50"
    >
      <MdOutlineModeEditOutline className="text-lg" /> Fill an issue
    </a>
  );
};
