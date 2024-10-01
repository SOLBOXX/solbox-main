import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FDFCF5',
        black: '#000007',
        primary: '#00BCD4',
        lightPrimary: '#2C69E2',
        secondary: "#3433A2",
        tertiary: "#041C62",
      },
    },
  },
  plugins: [],
};
export default config;
