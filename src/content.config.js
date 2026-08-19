import { defineCollection, z } from "astro:content";

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
  }),
});

const menu = defineCollection({
  schema: z.object({
    name: z.string(),
    price: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  events,
  menu,
};