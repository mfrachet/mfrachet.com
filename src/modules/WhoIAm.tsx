import { Link } from "../components/Link";
import { Text } from "../components/Text";
import me2Src from "../assets/me-2.jpg";

export const WhoIAm = () => {
  return (
    <section className="py-8 md:py-20">
      <div className="md:grid md:grid-cols-2 gap-4 md:gap-20 items-center">
        <div>
          <img
            src={me2Src}
            alt="Marvin Fracher (me)"
            className="hidden md:block rounded-3xl h-[390px] w-[520px] motion-safe:opacity-0 motion-safe:animate-opacity-appearing"
            style={{
              animationDelay: "1200ms",
            }}
          />
        </div>
        <div>
          <Text as="h2" className="text-2xl md:text-3xl">
            Hey there, I'm Marvin
          </Text>

          <Text
            as="p"
            className="text-xl md:text-2xl pt-2 pb-4 md:py-4 !text-stone-400"
          >
            I'm building apps with React and React native. When I step back from
            the code editor, you can find me chilling with my family & friends,
            or boxing on the ring.
          </Text>

          <div className="text-xl">
            <Link href="/about">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
