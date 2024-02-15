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
      className="inline-flex gap-1 flex-row items-center text-stone-400 text-sm hover:underline hover:text-stone-50"
    >
      <MdOutlineModeEditOutline className="text-lg" /> Fill an issue
    </a>
  );
};
