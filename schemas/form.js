export default {
  title: "Appointments",
  type: "document",
  name: "form",
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
      type: "string",
      title: "Appointment ID",
      name: "appointmentId",
      required: true,
      readOnly: true,
    },
    {
      type: "boolean",
      name: "cancelled",
      title: "Cancelled",
    },
    { title: "Submitted", name: "submitted", type: "datetime", readOnly: true },
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
      hidden: true,
    },
  ],
};
