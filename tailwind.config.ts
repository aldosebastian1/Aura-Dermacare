import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "outline": "#6c7b6b",
        "error": "#ba1a1a",
        "surface-bright": "#f8fafa",
        "secondary-fixed": "#93f2f2",
        "surface-container-low": "#f2f4f4",
        "secondary-container": "#90efef",
        "on-tertiary-fixed-variant": "#3a4a49",
        "on-error-container": "#93000a",
        "secondary": "#006a6a",
        "inverse-surface": "#2e3131",
        "inverse-primary": "#3de273",
        "on-surface": "#191c1d",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#b8cac9",
        "surface-container": "#eceeee",
        "surface-tint": "#006d2f",
        "on-primary": "#ffffff",
        "tertiary-container": "#aabcbb",
        "on-surface-variant": "#3c4a3d",
        "secondary-fixed-dim": "#76d6d5",
        "primary": "#006d2f",
        "primary-container": "#25d366",
        "tertiary": "#516161",
        "on-primary-fixed-variant": "#005322",
        "on-background": "#191c1d",
        "tertiary-fixed": "#d4e6e5",
        "background": "#f8fafa",
        "primary-fixed": "#66ff8e",
        "surface-container-highest": "#e1e3e3",
        "on-secondary-fixed": "#002020",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed": "#0e1e1e",
        "surface-variant": "#e1e3e3",
        "on-secondary-container": "#006e6e",
        "surface-container-high": "#e6e8e9",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#eff1f1",
        "outline-variant": "#bbcbb9",
        "on-tertiary-container": "#3c4c4c",
        "on-error": "#ffffff",
        "on-secondary-fixed-variant": "#004f4f",
        "on-tertiary": "#ffffff",
        "primary-fixed-dim": "#3de273",
        "surface-dim": "#d8dada",
        "on-primary-container": "#005523",
        "surface": "#f8fafa",
        "on-primary-fixed": "#002109"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"],
        "label": ["Plus Jakarta Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}

export default config
