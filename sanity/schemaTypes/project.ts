import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      type: "image",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }], // This tells Sanity to look for 'category' documents
        },
      ],
      options: {
        layout: "tags", // Optional: Display categories as tags for easier selection
      },
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "short_description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
