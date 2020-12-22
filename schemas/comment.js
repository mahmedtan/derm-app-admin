export default {
  name: "comment",
  type: "document",
  title: "Comment",
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
