/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        gganbuBlue: "#0047FF",
        gganbuNavy: "#06152E",
        gganbuBlack: "#111111",
        kakao: "#FEE500",
      },

      fontFamily: {
        sans: [
          "Pretendard",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },

      boxShadow: {
        blue: "0 20px 60px rgba(0, 71, 255, 0.18)",
        dark: "0 20px 60px rgba(0, 0, 0, 0.25)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      backgroundImage: {
        heroGradient:
          "linear-gradient(135deg, #0047FF 0%, #06152E 100%)",

        blueGradient:
          "linear-gradient(135deg, #0047FF 0%, #0066FF 100%)",

        darkGradient:
          "linear-gradient(135deg, #06152E 0%, #020817 100%)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },

  plugins: [],
};
