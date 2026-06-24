import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./apps/dashboard-builder/src/**/*.{js,jsx,ts,tsx}", "./libs/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          surface: {
            light: { value: '#ffffff' },
            dimmed: { value: '#f8f9fa' },
            dark: { value: '#1a1b1e' },
            darkDimmed: { value: '#141517' }
          }
        }
      }
    }
  },
  outdir: "styled-system",
});
