import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

let eslintConfig = [];

try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  if (__dirname) {
    const compat = new FlatCompat({ baseDirectory: __dirname });

    // Check if compat is successfully created
    if (compat) {
      eslintConfig = [
        ...compat.extends("next/core-web-vitals", "next/typescript"),
      ];
    } else {
      console.error("⚠️ ESLint compatibility could not be initialized.");
    }
  } else {
    console.error("⚠️ Failed to determine __dirname.");
  }
} catch (error) {
  console.error("❌ Error initializing ESLint config:", error);
}

export default eslintConfig;
