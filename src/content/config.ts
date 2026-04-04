import { defineCollection, z } from "astro:content";

const sectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
    people: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          img: z.string().optional(),
        }),
      )
      .optional(),
    address: z
      .object({
        name: z.string(),
        street: z.string(),
        postcode: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  sections: sectionsCollection,
};
