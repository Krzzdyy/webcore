/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        acid: "#C8F000",
        ink: "#0D0D0D",
        cream: "#F5F2E8",
        punch: "#FF3B2F",
        cobalt: "#1A1AFF",
        muted: "#888880",
      },
      fontFamily: {
        display: ["'Bangers'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        comic: "4px 4px 0px #0D0D0D",
        "comic-lg": "6px 6px 0px #0D0D0D",
        "comic-acid": "4px 4px 0px #C8F000",
        "comic-punch": "4px 4px 0px #FF3B2F",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
