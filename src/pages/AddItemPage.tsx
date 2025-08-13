/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { AppForm } from "../components/shared/AppForm";
import * as Yup from "yup";

// Form Field
const itemFields = [
  // {
  //   name: "type",
  //   label: "Item Type",
  //   placeholder: "purchaseItem or loan",
  // },
  {
    name: "title",
    label: "Title",
    placeholder: "ex. something",
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "ex. 3000",
  },
  {
    name: "purchaseDate",
    label: "Purchase Date",
    placeholder: "01/01/2025",
  },
  {
    name: "numberOfMonths",
    label: "Number Of Months",
    type: "number",
    placeholder: "12",
  },
  {
    name: "startIn",
    label: "Start In",
    placeholder: "01/01/2025",
  },
  {
    name: "endIn",
    label: "End In",
    placeholder: "01/01/2026",
  },
  {
    name: "notes",
    label: "Notes",
    type: "textarea",
    placeholder: "Item details",
  },
];

// validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  price: Yup.number().min(1, "Amount must be positive number").required(),
  purchaseDate: Yup.date().required(),
  numberOfMonths: Yup.number()
    .min(1, "Amount must be positive number")
    .required(),
  startIn: Yup.date().required(),
  endIn: Yup.date().required(),
  notes: Yup.string().notRequired(),
});

const AddItemPage = () => {
  const handleSubmit = (values: any, actions: any) => {
    alert(JSON.stringify(values));
    console.log(values, null, 2);
    actions.setSubmitting(false);
  };

  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={itemFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Add Item"
      />
    </Box>
  );
};

export default AddItemPage;
