export default {
  type: "document",
  title: "Procedure",
  name: "procedure",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Result) => Result.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "number",
      description: "in minutes",
      validation: (Result) => Result.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "in USD",
      validation: (Result) => Result.required(),
    },
    {
      type: "text",
      title: "Description",
      description: "a short description for the proceedure",
      name: "description",
      rows: 3,
      validation: (Rule) => Rule.required().max(50),
    },
  ],
};
