export default {
  title: "Form",
  type: "document",
  name: "form",
  readOnly: true,
  fields: [
    {
      title: "First Name",
      name: "firstName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Last Name",
      name: "lastName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Email Address",
      name: "emailAddress",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Phone Number",
      type: "string",
      name: "phoneNumber",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", name: "image", title: "Image" }],
    },
    {
      name: "procedures",
      title: "Procedures",
      type: "array",
      of: [{ type: "reference", to: [{ type: "procedure" }] }],
    },
    {
      name: "consultations",
      title: "Consultations",
      type: "array",
      of: [{ type: "reference", to: [{ type: "consultation" }] }],
    },

    {
      type: "text",
      title: "Remarks",
      name: "remarks",
    },
    {
      type: "boolean",
      name: "cancelled",
      title: "Cancelled",
    },
    { title: "Submitted", name: "submitted", type: "datetime" },
    {
      title: "Booked For",
      name: "bookedFor",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sub",
      type: "string",
      readOnly: true,
      name: "sub",
    },
  ],
};
