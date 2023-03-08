import { Career } from "@/components/Career";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SideProjects } from "@/components/SideProjects";
import Head from "next/head";

export default function Home() {
  const title = "Marvin Frachet (@mfrachet) homepage";
  const description =
    "Marvin Frachet (@mfrachet) is a french software developer building functional frontend applications and websites for humans. Testing automation and accessibility are his actual focus.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content="https://mfrachet.com/og.png" />
        <meta name="twitter:card" content="summary"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-full bg-slate-900 text-slate-300 pb-8">
        <div id="background" className=" mb-16">
          <Container>
            <Navbar />
            <Hero />
          </Container>
        </div>
        <Container>
          <SideProjects />
          <div className="h-20" />
          <Career />
        </Container>
      </main>
    </>
  );
}
