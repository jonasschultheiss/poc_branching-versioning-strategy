// @ts-check

import tseslint from "typescript-eslint";
import tsConfig from "./base.mjs";

export default tseslint.config(tsConfig, {
  name: "Pax library config"
});
