export default {
  type: "document",
  name: "patient",
  title: "Patients",
  fields: [
    {
      type: "string",
      title: "Full Name",
      name: "fullName",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      title: "Email Address",
      name: "emailAddress",
      validation: (Rule) => Rule.required(),
    },

    {
      type: "string",
      title: "Phone Number",
      name: "phoneNumber",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      title: "Patient ID",
      name: "patientId",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      title: "Sub",
      name: "sub",
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
  ],
};
