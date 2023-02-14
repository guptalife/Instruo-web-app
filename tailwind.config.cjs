/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "alert-success",
    "alert-error",
    "alert-warning",
    "text-primary",
    "text-secondary",
    "text-neutral",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      // {
      // 	mytheme: {
      // 		primary: "#a991f7",
      // 		secondary: "#f6d860",
      // 		accent: "#37cdbe",
      // 		neutral: "#3d4451",
      // 		"base-100": "#ffffff",
      // 	},
      // },
    ],
  },
};
