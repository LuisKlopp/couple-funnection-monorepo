import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      perspective: {
        none: "none",
        1000: "1000px",
      },
      zIndex: {
        "5": "5",
      },
      boxShadow: {
        "soft-card": `0 4px 20px rgba(0, 0, 0, 0.08), 
                      0 2px 8px rgba(0, 0, 0, 0.04), 
                      0 -1px 4px rgba(0, 0, 0, 0.02)`,
      },
      backgroundImage: {
        "complex-gradient":
          "linear-gradient(to right, #000000 1%, #920028 100%)",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        dmdisplay: ["var(--font-dmDisplay)", "serif"],
      },
      screens: {
        sm: "576px",
        smd: "604px",
        md: "768px",
        mdl: "834px",
        mdlg: "963",
        lg: "1024px",
        lgx: "1280px",
        xl: "1441px",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "24px",
        xl: "36px",
      },
      fontWeight: {
        light: "300",
        medium: "500",
      },
      height: {
        "15": "60px",
      },
      maxWidth: {
        "2xl": "1441px",
      },
      padding: {
        "15": "60px",
      },
      colors: {
        backgroundColor: "#fffafa",
        primaryColor: "#c95b5b",
        gray: {
          1: "#FAFAFA",
          2: "#F0F0F0",
          3: "#E0E0E0",
          4: "#CFCFCF",
          5: "#AFAFAF",
          6: "#8F8F8F",
          7: "#5F5F5F",
          8: "#2F2F2F",
        },
        lightPurple: "#c9bdcb",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "grow-rotate": {
          "0%": {
            transform: "scale(0) rotate(-15deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(-15deg)",
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "grow-rotate": "grow-rotate 0.2s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    animate,
    typography,

    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-1": {
          textShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
        },
        ".text-shadow-2": {
          textShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
        },
        ".text-shadow-3": {
          textShadow: "0 5px 5px rgba(0, 0, 0, 0.4)",
        },
        ".box-shadow-1": {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        ".box-shadow-2": {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        },
        ".box-shadow-3": {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        },
        ".box-shadow-4": {
          boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.4)",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
