/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        neon: {
          pink: '#ff007a',
          blue: '#00ffff',
          green: '#39ff14',
          slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
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
      boxShadow: {
        'neon-slate': '0 0 10px #64748b, 0 0 20px #64748b, 0 0 30px #64748b',
        'neon-gray': '0 0 10px #6b7280, 0 0 20px #6b7280, 0 0 30px #6b7280',
        'neon-zinc': '0 0 10px #71717a, 0 0 20px #71717a, 0 0 30px #71717a',
        'neon-neutral': '0 0 10px #737373, 0 0 20px #737373, 0 0 30px #737373',
        'neon-stone': '0 0 10px #78716c, 0 0 20px #78716c, 0 0 30px #78716c',
        'neon-red': '0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444',
        'neon-orange': '0 0 10px #f97316, 0 0 20px #f97316, 0 0 30px #f97316',
        'neon-amber': '0 0 10px #f59e0b, 0 0 20px #f59e0b, 0 0 30px #f59e0b',
        'neon-yellow': '0 0 10px #eab308, 0 0 20px #eab308, 0 0 30px #eab308',
        'neon-lime': '0 0 10px #84cc16, 0 0 20px #84cc16, 0 0 30px #84cc16',
        'neon-green': '0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e',
        'neon-emerald': '0 0 10px #10b981, 0 0 20px #10b981, 0 0 30px #10b981',
        'neon-teal': '0 0 10px #14b8a6, 0 0 20px #14b8a6, 0 0 30px #14b8a6',
        'neon-cyan': '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4',
        'neon-sky': '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9',
        'neon-blue': '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6',
        'neon-indigo': '0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #6366f1',
        'neon-violet': '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6',
        'neon-purple': '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7',
        'neon-fuchsia': '0 0 10px #d946ef, 0 0 20px #d946ef, 0 0 30px #d946ef',
        'neon-pink': '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899',
        'neon-rose': '0 0 10px #f43f5e, 0 0 20px #f43f5e, 0 0 30px #f43f5e',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [nextui(), require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
