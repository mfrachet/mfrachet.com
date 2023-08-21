import { useRef } from "react";
import { Card } from "../../../components/Card";
import { Link } from "../../../components/Link";
import { Text } from "../../../components/Text";
import type { Job } from "../types";

export interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Card
      onClick={() => {
        linkRef.current?.click();
      }}
    >
      <img
        src={job.imageUrl}
        alt={job.company}
        className="object-cover w-full rounded-t-3xl h-[162px]"
      />
      <div className="p-6">
        <Text className="font-bold" as="h3">
          {job.title}
        </Text>

        <Text className="pt-2 pb-6 text-sm !text-stone-400" as="p">
          {job.description}
        </Text>

        <Link ref={linkRef} href={job.url} target="_blank">
          <span className="sr-only">{job.company} </span>Website
        </Link>
      </div>
    </Card>
  );
};
