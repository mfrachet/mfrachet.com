import { Text } from "../components/Text";
import { Title } from "../components/Title";

export const WhoIAm = () => {
  return (
    <section className="py-8 md:py-20 px-8 md:px-20 border-4 border-zinc-500 rounded-3xl">
      <Title as="h2" className="text-3xl">
        <span aria-hidden>👋</span> Hello, my name is Marvin
      </Title>

      <Text
        as="div"
        className="text-base md:text-2xl pt-2 pb-4 md:py-4 !text-zinc-400 flex flex-col gap-6"
      >
        <p className="leading-relaxed">
          A French frontend engineer building things with React & React Native.
        </p>
        <p className="leading-relaxed">
          I'm also a proud father of{" "}
          <a
            href="/blog/en/the-day-that-changed-everything"
            className="text-white underline"
          >
            a little boy with Down syndrome
          </a>
          , a husband, and someone who enjoys boxing, staying active, and always
          learning.
        </p>
        <p className="leading-relaxed">
          My goal is to help people by creating truly accessible software for
          everyone—because accessibility isn't a tradeoff. I'm also enthusiastic
          about testing automation, ensuring that everything I develop is
          reliable and efficient.
        </p>
      </Text>
    </section>
  );
};
