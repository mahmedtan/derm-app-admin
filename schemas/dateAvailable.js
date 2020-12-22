export default {
  type: "document",
  name: "dateAvailable",
  title: "Date Available",
  fields: [
    {
      type: "date",
      name: "dateSelected",
      title: "Date",
      validation: (Rule) => Rule.required(),
    },
  ],
};
