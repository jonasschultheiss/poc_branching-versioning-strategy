import nx from "@nx/eslint-plugin";
// import vercelConfig from "@vercel/style-guide/eslint/next";
import tseslint from "typescript-eslint";
import globals from "globals";

import tsConfig from "./base.mjs";

export default tseslint.config(
  tsConfig,
  { ignores: ["next-env.d.ts", ".next/"] },
  ...nx.configs["flat/react-base"],
  ...nx.configs["flat/react-typescript"],
  // vercel config is not updated for eslint 9 flat config
  // vercelConfig.overrides.map(config => config),
  {
    name: "Pax nextjs config",
    globals: {
      React: true,
      JSX: true
    },
    env: {
      node: true,
      browser: true
    },
    languageOptions: {
      globals: {
        ...globals.es2023,
        ...globals.node,
        ...globals.browser
      }
    }
  }
);
