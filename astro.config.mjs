import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  adapter: netlify(),
  // When using adapter netlify, NEED to specify site or will get error "INVALID URL"
  site: "https://learn-astro-ssr.netlify.app"
});