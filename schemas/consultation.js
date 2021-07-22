export default {
  type: "document",
  title: "Consultation",
  name: "consultation",
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
      name: "startingPrice",
      title: "Starting Price",
      type: "number",
      description: "in USD",
      validation: (Result) => Result.required().min(0),
    },
    {
      name: "endingPrice",
      title: "Ending Price",
      type: "number",
      description: "in USD",
      validation: (Result) => Result.min(0),
    },
    {
      type: "text",
      title: "Description",
      description: "a short description for the consultation",
      name: "description",
      validation: (Rule) => Rule.required().max(150),
      rows: 3,
    },
  ],
};
