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
      name: "metaTags",
      type: "array",
      title: "Meta Tags",
      of: [{ type: "metaTag" }],
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
      name: "hideOnAccordian",
      title: "Hide On Accordian",
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
    {
      type: "array",
      title: "Slider Images",
      name: "sliderImages",
      of: [{ type: "image" }],
    },
    {
      type: "boolean",
      title: "Show Image Slider",
      name: "showSlider",
    },
    {
      type: "array",
      title: "Brands",
      name: "brands",
      of: [{ type: "brand" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
