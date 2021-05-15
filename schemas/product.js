export default {
  type: "object",
  name: "product",
  title: "Product",
  fields: [
    {
      title: "Product Name",
      type: "string",
      name: "productName",
      validation: (Rule) => Rule.required().error("Product Name is Required"),
    },
    {
      title: "Product Price",
      type: "number",
      name: "productPrice",
      validation: (Rule) => Rule.min(0),
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
