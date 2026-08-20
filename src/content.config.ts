import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";

const pages = defineCollection({
    loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/pages" }),
    schema: z.object({
        title: z.string(),
        summary: z.string().optional(),
        meta: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
        openGraph: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
        updated_date: z.coerce.date().optional(),
    }),
});

// content section, like page builder
// const sections

export const collections = {
    pages,
};
