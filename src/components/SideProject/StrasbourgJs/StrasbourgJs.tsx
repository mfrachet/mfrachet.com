import Image from "next/image";
import { FaMeetup } from "react-icons/fa";
import { SideProject } from "../SideProject";
import strasbourgImg from "./strasbourgjs.jpg";

export const StrasbourgJs = () => {
  return (
    <SideProject
      title={"StrasbourgJS"}
      href={"https://strasbourgjs.org/"}
      logo={
        <Image
          src={strasbourgImg}
          alt=""
          width={64}
          height={64}
          className="rounded-lg"
        />
      }
    >
      <p className="text-lg md:text-2xl max-w-2xl">
        The JavaScript community of the city of{" "}
        <a
          href="https://www.google.com/search?q=strasbourg&tbm=isch"
          className="underline font-bold"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Strasbourg
        </a>
        .
      </p>
    </SideProject>
  );
};
