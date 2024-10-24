// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import "eslint-plugin-only-warn";
import { resolve } from "node:path";
import nx from "@nx/eslint-plugin";
// import vercelConfig from "@vercel/style-guide/eslint/typescript";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import babelParser from "@babel/eslint-parser";

const project = resolve(process.cwd(), "tsconfig.json");

export default tseslint.config(
  {
    name: "Pax base ignored files config",
    ignores: ["**/*.config.js", ".*.js", "node_modules/", "dist/", ".nx/"]
  },
  ...nx.configs["flat/base"],
  ...nx.configs["flat/javascript"],
  ...nx.configs["flat/typescript"],
  // vercel config is not updated for eslint 9 flat config
  // vercelConfig.overrides.map(config => config),
  eslint.configs.recommended,
  eslintConfigPrettier,
  {
    name: "Pax base config",
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project
      },
      globals: {
        ...globals.es2023,
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    settings: {
      "import/resolver": {
        typescript: {
          project
        }
      }
    },
    rules: {
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error"
    }
  },
  {
    name: "Pax base mjs-config-files config",
    files: ["**/*.mjs"],
    // ignores: ["*.config.js", ".*.js", "node_modules/", "dist/", ".next/", ".nx/"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-env"]
        },
        ecmaVersion: 2023,
        sourceType: "module"
      }
    }
  }
);
