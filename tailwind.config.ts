import type { Config } from 'tailwindcss';
import daisyui from "daisyui"
import {themes} from "./src/lib/themes"
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: themes,
  },
} satisfies Config;