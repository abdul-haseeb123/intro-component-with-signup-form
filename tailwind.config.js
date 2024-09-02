/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-pattern": "url('/images/bg-intro-desktop.png')",
        "mobile-pattern": "url('/images/bg-intro-mobile.png')",
      },
      colors: {
        "primary-red": "hsl(var(--primary-red))",
        "primary-green": "hsl(var(--primary-green))",
        "accent-blue": "hsl(var(--accent-blue))",
        "neutral-dark-blue": "hsl(var(--neutral-dark-blue))",
        "neutral-gray-blue": "hsl(var(--neutral-gray-blue))",
      },
    },
  },
  plugins: [],
};
