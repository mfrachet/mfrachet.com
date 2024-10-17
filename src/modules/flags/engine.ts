import { createFlagEngine } from "@flag-engine/core";

export const engine = createFlagEngine([
  {
    key: "homepage-variant",
    status: "enabled",
    strategies: [
      {
        name: "All audience",
        rules: [],
        variants: [
          {
            name: "A",
            percent: 50,
          },
          {
            name: "B",
            percent: 50,
          },
        ],
      },
    ],
  },
]);
