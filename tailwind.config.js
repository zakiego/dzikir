module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"nord-900": "#2E3440",
				"nord-200": "#6CB3C3",
				tosca: "#71a8bf",
				senja: "#E39954",
				"card-pagi": "#F5FBFF",
				"card-sore": "#FFFAF5",
			},
			textColor: {
				"hitam-33": "#33333",
				"biru-tipis": "#EDF8FF",
			},
			boxShadow: {
				tipis: "0 8px 40px 0 rgba(30, 30, 30, 0.08)",
			},
			fontFamily: {
				hafs: ["KFGQPC Uthmanic Script HAFS", "sans-serif"],
				taha: ["KFGQPC Uthman Taha Naskh", "sans-serif"],
				ubuntu: ["ubuntu", "system-ui", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
