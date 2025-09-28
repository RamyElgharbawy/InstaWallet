/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { AppForm } from "../../components/shared/AppForm";
import * as Yup from "yup";
import { useFellows } from "../../hooks/fellowsHook";

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
  manager: Yup.string().required("Fellow manager Required"),
  amount: Yup.number()
    .transform((_, originalValue) => {
      return originalValue === "" ? undefined : Number(originalValue);
    })
    .typeError("Amount must be a number")
    .min(1, "Amount must be positive number")
    .required(),
  startIn: Yup.date().required(),
  endIn: Yup.date().required(),
  numberOfMonths: Yup.number()
    .transform((_, originalValue) => {
      return originalValue === "" ? undefined : Number(originalValue);
    })
    .typeError("Number Of Months must be a number")
    .min(1, "Number Of Months must be positive number")
    .required(),
  turnMonth: Yup.number()
    .transform((_, originalValue) => {
      return originalValue === "" ? undefined : Number(originalValue);
    })
    .typeError("Turn month must be a number")
    .min(1, "Turn month must be positive number")
    .required(),
});

const AddFellowPage = () => {
  const { isCreatingFellow, createFellow } = useFellows();

  const handleSubmit = (values: any, actions: any) => {
    // cast values from input to convert string  input fields to numbers
    const castedValues = validationSchema.cast(values);
    // execute mutation function
    createFellow(castedValues);

    actions.setSubmitting(false);
  };

  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={fellowFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Add Fellow"
        loadingStatus={isCreatingFellow}
      />
    </Box>
  );
};

export default AddFellowPage;
