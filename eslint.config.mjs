// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsConfig from "@pax/style-guide/eslint/base";

export default tseslint.config(...tsConfig, {
  name: "Monorepo config",
  ignores: ["eslint.config.mjs"]
});
