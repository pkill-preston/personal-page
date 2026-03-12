import type {Config} from "tailwindcss";

const config: Config = {
	darkMode: "class",

	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				serif: ["var(--font-serif)"],
				mono: ["var(--font-jet)"]
			},
			keyframes: {
				textGlow: {
					"0%, 100%": {color: "#65b187"},
					"50%": {color: "#a0d1b0"}
				}
			},
			animation: {
				"text-glow": "textGlow 2s ease-in-out infinite"
			}
		}
	}
};

export default config;