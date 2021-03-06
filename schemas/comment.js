export default {
  name: "comment",
  type: "document",
  title: "Reviews",
  fields: [
    {
      name: "patientName",
      title: "Patient Name",
      type: "string",
    },
    {
      name: "remarks",
      title: "Remarks",
      type: "text",
    },
    {
      name: "show",
      title: "Show",
      type: "boolean",
    },
  ],
};
