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
    defineField({
      name: "category",
      title: "Category",
      type: "string", // The stored value will still be a string
      description: "Select the category this technology belongs to.",
      options: {
        list: [
          // Define your categories here
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Headless CMS", value: "headless-cms" },
          { title: "Databases", value: "databases" },
          { title: "Languages", value: "languages" },
          { title: "Styling", value: "styling" }, // Maybe more specific than Frontend for CSS/Sass etc
          { title: "Tools & Utilities", value: "tools-utilities" },
          { title: "Testing", value: "testing" },
          { title: "DevOps", value: "devops" },
          // Add any other categories you find useful
        ],
        layout: "dropdown", // Use 'dropdown' or 'radio' for the input layout in Sanity Studio
      },
      validation: (Rule) => Rule.required(), // Make selecting a category mandatory
    }),
  ],
});
