/* eslint-disable @next/next/no-img-element */
import { ProgressivelyLogo } from "@/components/SideProject/Progressively/ProgressivelyLogo";
import { SideProject } from "../SideProject";

export const Progressively = () => {
  return (
    <SideProject
      title={"Progressively"}
      href={"https://progressively.app"}
      logo={<ProgressivelyLogo className="h-16 w-16 rounded-lg bg-slate-700" />}
      cta={
        <>
          <a
            href="https://progressively.gitbook.io/docs/"
            className="block rounded-lg flex items-center whitespace-nowrap h-10 px-6 bg-indigo-700 font-semibold text-sm text-white hover:bg-indigo-500 active:bg-indigo-600"
          >
            Get started
          </a>
          <a
            href="https://railway.app/new/template/o-qwn1?referralCode=AwmVVM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://railway.app/button.svg"
              alt="Deploy on Railway"
              className="h-10 px-4"
            />
          </a>
        </>
      }
    >
      <p className="text-lg md:text-2xl max-w-2xl">
        A simple, accessible, lightweight, self-hosted and OpenSource feature
        flag software. It works at the edge.
      </p>
    </SideProject>
  );
};
