import { defineType, defineField } from "sanity";

export default defineType({
  name: "stack",
  title: "Stack",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/png, image/svg+xml",
      },
    }),
  ],
});
