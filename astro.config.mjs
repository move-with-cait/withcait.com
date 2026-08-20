// @ts-check
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://withcait.com",

    prefetch: {
        prefetchAll: true,
    },

    vite: {
        css: {
            transformer: "lightningcss",
            lightningcss: {
                targets: browserslistToTargets(browserslist("defaults")),
            },
        },
    },
});
