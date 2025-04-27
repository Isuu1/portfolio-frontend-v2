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
      name: "thumbnail",
      type: "image",
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
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "projectUrl",
      title: "Live Project URL",
      type: "url",
    }),
    defineField({
      name: "repoUrl",
      title: "Code Repository URL",
      type: "url",
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags", // Makes it easy to add/view tech tags
      },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
});
