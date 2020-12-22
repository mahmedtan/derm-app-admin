export default {
  type: "document",
  name: "service",
  title: "Service",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "serviceType",
      type: "reference",
      to: { type: "serviceType", title: "Service Type" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "showOnSlider",
      title: "Show On Slider",
      type: "boolean",
    },
    {
      type: "number",
      name: "order",
      title: "Order On Slider",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "number",
      name: "orderAccordian",
      title: "Order On Accordian",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
