import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menu = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
  schema: z.object({
    name: z.string(),
    price: z.union([z.number(), z.literal("TODO")]),
    category: z.enum(["Appetizers", "Pasta n Pizza", "Dessert", "Hot Beverage"]),
    veg: z.boolean(),
    order: z.number(),
    note: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { menu, events };
