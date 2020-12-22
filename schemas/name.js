export default {
  type: "object",
  name: "name",
  title: "Patient Name",
  fields: [
    {
      title: "First name",
      type: "string",
      name: "firstName",
      validation: (Rule) => Rule.required().error("First Name is Required"),
    },
    {
      title: "Middle name",
      type: "string",
      name: "middleName",
    },
    {
      title: "Last name",
      type: "string",
      name: "lastName",
      validation: (Rule) => Rule.required().error("Last name is Required"),
    },
  ],
};
