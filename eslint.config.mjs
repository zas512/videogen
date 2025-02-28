import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from './.prettierrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    extends: [
      'next',
      'prettier',
    ],
    plugins: [
      'prettier'
    ],
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    }
  }
];

export default eslintConfig;
