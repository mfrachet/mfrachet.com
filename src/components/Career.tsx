import Image, { StaticImageData } from "next/image";
import { useId, useRef } from "react";
import protoImg from "../assets/career/proton.png";
import ocImg from "../assets/career/oc.png";
import strapiImg from "../assets/career/strapi.png";
import gatsbyImg from "../assets/career/gatsby.png";
import sixPlayImg from "../assets/career/6play.jpg";
import { Line } from "./Line";

const CompanyPictureSize = 200;

interface CareerCardProps {
  children: React.ReactNode;
  title: string;
  src: StaticImageData;
  href: string;
}

const CareerCard = ({ title, children, src, href }: CareerCardProps) => {
  const id = useId();
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <article
      className="border bg-gray-800 border-gray-700 rounded-lg p-4 hover:cursor-pointer transition-transform hover:drop-shadow-2xl hover:scale-105 focus:scale-105 active:bg-slate-700"
      aria-labelledby={id}
      tabIndex={0}
      onClick={() => linkRef.current?.click()}
    >
      <Image
        src={src}
        alt={""}
        height={CompanyPictureSize}
        className="rounded w-full"
      />
      <h3 className="text-slate-50 text-2xl font-bold py-2" id={id}>
        <a
          href={href}
          ref={linkRef}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {title}
        </a>
      </h3>

      {children}
    </article>
  );
};

export const Career = () => {
  const id = useId();

  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="font-extrabold text-5xl text-slate-50 pb-2">
        Career
      </h2>

      <Line />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
        <CareerCard
          title={"Proton Privacy"}
          src={protoImg}
          href="https://proton.me/"
        >
          <p>
            In the Growth Team, worked on improving the scalability of
            statically generated websites, using React ecosystem.
          </p>
        </CareerCard>

        <CareerCard
          title={"OpenClassrooms"}
          src={ocImg}
          href="https://openclassrooms.com/"
        >
          <p>
            In the Engineering Team, mostly implied in Product revamping, using
            React Ecosystem.
          </p>
        </CareerCard>

        <CareerCard title={"Strapi"} src={strapiImg} href="https://strapi.io/">
          <p>
            In the Engineering Team, built core functionalities, implemented the
            Design System library (Strapi v4).
          </p>
        </CareerCard>

        <CareerCard
          title={"Gatsby"}
          src={gatsbyImg}
          href="https://www.gatsbyjs.com/"
        >
          <p>
            In the Engineering Team, worked on Gatsby Cloud and the build
            experience, using React Ecosystem
          </p>
        </CareerCard>

        <CareerCard
          title={"6Play"}
          src={sixPlayImg}
          href="https://www.6play.fr/"
        >
          <p>
            In the Engineering Team, built React Native functionalities inside
            the native apps.
          </p>
        </CareerCard>
      </div>
    </section>
  );
};
