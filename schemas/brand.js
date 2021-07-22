export default {
  type: "object",
  name: "brand",
  title: "Brand",
  fields: [
    {
      title: "Brand Name",
      type: "string",
      name: "brand",
      validation: (Rule) => Rule.required().error("Brand Name is Required"),
    },
    {
      title: "Brand Link",
      type: "string",
      name: "brandLink",
    },
    {
      type: "array",
      title: "Products",
      name: "products",
      of: [{ type: "product" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
