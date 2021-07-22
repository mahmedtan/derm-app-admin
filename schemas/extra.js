export default {
  type: "document",
  name: "extra",
  title: "Extra",
  fields: [
    {
      type: "string",
      title: "Title",
      name: "title",
      // readOnly: true,
    },
    {
      type: "string",
      title: "Title Secondary",
      name: "titleSecondary",
      // readOnly: true,
    },
    {
      type: "image",
      title: "Avatar",
      name: "avatar",
    },
    {
      type: "mux.video",
      name: "posterVideo1",
      title: "Poster Video",
    },

    {
      type: "mux.video",
      name: "bannerVideo",
      title: "Banner Video",
    },
    {
      type: "blockContent",
      title: "Body",
      name: "body",
    },
    {
      type: "blockContent",
      title: "Body Secondary",
      name: "bodySecondary",
    },
    {
      type: "text",
      title: "Description",
      name: "description",
    },
    {
      type: "string",
      title: "Page Type",
      name: "pageType",
      hidden: true,
    },
    {
      name: "metaTags",
      type: "array",
      title: "Meta Tags",
      of: [{ type: "metaTag" }],
    },
    {
      type: "array",
      title: "Posters",
      name: "posters",
      of: [{ type: "image" }],
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
  ],
};
