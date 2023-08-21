import type { Job } from "./types";
import protonSrc from "./assets/proton.webp";
import ocSrc from "./assets/oc.webp";
import strapiSrc from "./assets/strapi.webp";
import gatsbySrc from "./assets/gatsby.webp";

export const jobs: Array<Job> = [
  {
    company: "Proton",
    url: "https://proton.me",
    description:
      "In the Growth Team, worked on improving the scalability of statically generated websites, using React ecosystem.",
    title: "Senior Frontend engineer",
    imageUrl: protonSrc,
  },
  {
    company: "OpenClassroom",
    url: "https://openclassrooms.com/en/",
    description:
      "In the Engineering Team, mostly implied in Product revamping, using React Ecosystem.",
    title: "Staff Frontend engineer",
    imageUrl: ocSrc,
  },
  {
    company: "Strapi",
    url: "https://strapi.io/",
    description:
      "In the Engineering Team, built core functionalities, implemented the Design System library (Strapi v4).",
    title: "Senior Frontend engineer",
    imageUrl: strapiSrc,
  },
  {
    company: "Gatsby",
    url: "https://www.gatsbyjs.com/",
    description:
      "In the Engineering Team, worked on Gatsby Cloud and the build experience, using React Ecosystem",
    title: "Senior Frontend engineer",
    imageUrl: gatsbySrc,
  },
];
