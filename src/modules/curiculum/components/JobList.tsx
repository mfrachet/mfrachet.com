import type { Job } from "../types";
import { JobCard } from "./JobCard";

export interface JobListProps {
  jobs: Array<Job>;
}

export const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 md:gap-8">
      {jobs.map((job) => (
        <JobCard job={job} />
      ))}
    </div>
  );
};
