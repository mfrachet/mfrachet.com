import Image from "next/image";
import mePhoto from "../assets/me.jpeg";

export const Hero = () => {
  return (
    <section className="flex flex-row gap-4 py-20 md:py-32 max-w-6xl">
      <div className="mr-auto place-self-center lg:col-span-7">
        <span className="md:text-2xl font-mono px-4 py-2 bg-slate-800 rounded-lg">
          @mfrachet
        </span>
        <h1 className="max-w-2xl md:pb-4 text-4xl font-extrabold md:text-6xl text-slate-50 pt-4">
          Marvin Frachet
        </h1>

        <p className="max-w-lg md:max-w-2xl text-xl md:text-3xl">
          <strong className="font-semibold text-slate-50">
            Frontend developper
          </strong>{" "}
          loving testing automation & accessibility
        </p>
      </div>

      <div className="hidden lg:col-span-5 lg:flex">
        <div className="rounded-full border-4 border-white overflow-hidden">
          <Image
            src={mePhoto}
            alt="Marvin Frachet drinking a beer"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
};
