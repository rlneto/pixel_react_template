import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
      parser: "@typescript-eslint/parser", // Use TypeScript parser
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReactConfig,
  jsxA11y.configs.recommended,
  importPlugin.configs.recommended,
  prettierPlugin.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": tseslint,
      react: "eslint-plugin-react",
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier: prettierPlugin,
      tailwindcss: tailwindcss,
    },
    rules: {
      // Possible Errors
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",

      // Best Practices
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-multi-spaces": "error",
      "no-unused-vars": "warn",
      "consistent-return": "error",

      // Stylistic Issues
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      indent: ["error", 2],
      "comma-dangle": ["error", "always-multiline"],

      // ES6
      "prefer-const": "error",
      "no-var": "error",
      "arrow-spacing": ["error", { before: true, after: true }],

      // React
      "react/prop-types": "off", // Disable if using TypeScript
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/jsx-uses-react": "off", // Not needed with React 17+
      "react/jsx-uses-vars": "error",

      // Accessibility
      "jsx-a11y/anchor-is-valid": "error",

      // Imports
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
      "import/no-duplicates": "error",
      "import/no-named-as-default": "error",

      // Prettier
      "prettier/prettier": "error",

      // Tailwind CSS
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-custom-classname": "off", // Enable if you want to enforce only Tailwind classes
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      tailwindcss: {
        config: "./tailwind.config.js", // Path to your Tailwind CSS configuration
      },
    },
  },
];
