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
                nmo: {
                    celeste: "#8ad3f2",      // Celeste pastel
                    "celeste-dark": "#00577d", // Celeste negro
                    white: "#ffffff",
                },
            },
            fontFamily: {
                sans: ["Poppins", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;