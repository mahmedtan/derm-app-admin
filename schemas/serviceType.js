export default {
  type: "document",
  title: "Service Type",
  name: "serviceType",

  fields: [
    { name: "name", title: "Name", type: "string" },
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      type: "number",
      name: "order",
      title: "Order",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "color",
      name: "backgroundColor",
      title: "Background Color",
    },
    {
      name: "metaTags",
      type: "array",
      title: "Meta Tags",
      of: [{ type: "metaTag" }],
    },
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),

      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
