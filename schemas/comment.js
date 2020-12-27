export default {
  name: "comment",
  type: "document",
  title: "Reviews",
  readOnly: true,
  fields: [
    {
      name: "patientName",
      title: "Patient Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "remarks",
      title: "Remarks",
      type: "text",
      readOnly: true,
    },
    {
      name: "show",
      title: "Show",
      type: "boolean",
    },
  ],
};
