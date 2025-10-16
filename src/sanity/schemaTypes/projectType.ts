import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Portfolio Work",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Name of the project",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The unique URL-friendly identifier for this project",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt Text" }],
        },
      ],
      validation: (rule) =>
        rule.required().min(1).error("At least one image is required."),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: [
          { title: "Custom Machinery", value: "custom machinery" },
          { title: "Digital Fabrication", value: "digital fabrication" },
          { title: "IOT & Electronics", value: "iot and Electronics" },
          { title: "Hardware Design", value: "hardware design" },
          { title: "Machine Software", value: "machine software" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of what this project is about",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: "The client of the project",
    }),
    defineField({
      name: "media",
      title: "Media Slug",
      type: "string",
      description: "The slug to read more about the project",
    }),
    defineField({
      name: "youtube",
      title: "Youtube URL",
      type: "string",
      description: "The youtube URL for video to learn more about the project",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: "The year when this project is done",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "The location where this project is done",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      description: "When this project was created",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
  },
});
