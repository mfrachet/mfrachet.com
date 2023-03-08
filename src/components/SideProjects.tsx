import { useId } from "react";
import { Line } from "./Line";
import { Progressively } from "./SideProject/Progressively/Progressively";
import { StrasbourgJs } from "./SideProject/StrasbourgJs/StrasbourgJs";

export const SideProjects = () => {
  const id = useId();

  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="font-extrabold text-5xl text-slate-50 pb-2">
        Side Things
      </h2>

      <Line />

      <div className="pt-10 flex flex-col gap-4">
        <Progressively />
        <StrasbourgJs />
      </div>
    </section>
  );
};
