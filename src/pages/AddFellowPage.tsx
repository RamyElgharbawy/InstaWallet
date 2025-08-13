/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { AppForm } from "../components/shared/AppForm";
import * as Yup from "yup";

// Form Field
const fellowFields = [
  {
    name: "manager",
    label: "Fellow Manager",
    placeholder: "ex.Ahmed",
  },
  {
    name: "amount",
    label: "Amount",
    type: "number",
    placeholder: "5000",
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
    name: "numberOfMonths",
    label: "Number Of Months",
    type: "number",
    placeholder: "12",
  },
  {
    name: "turnMonth",
    label: "Turn Month",
    type: "number",
    placeholder: "ex. 1 or 2",
  },
];

// validation schema
const validationSchema = Yup.object().shape({
  manager: Yup.string().required("Required"),
  amount: Yup.number().min(1, "Amount must be positive number").required(),
  startIn: Yup.date().required(),
  endIn: Yup.date().required(),
  numberOfMonths: Yup.number()
    .min(1, "Amount must be positive number")
    .required(),
  turnMonth: Yup.number().min(1, "Amount must be positive number").required(),
});
const AddFellowPage = () => {
  const handleSubmit = (values: any, actions: any) => {
    alert(JSON.stringify(values));
    console.log("Profile values:", values);
    actions.setSubmitting(false);
  };
  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={fellowFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Add Fellow"
      />
    </Box>
  );
};

export default AddFellowPage;
