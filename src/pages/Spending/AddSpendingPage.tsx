/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { AppForm } from "../../components/shared/AppForm";
import * as Yup from "yup";
import { useSpendings } from "../../hooks/spendingHook";

// Form Field
const spendingFields = [
  {
    name: "name",
    label: "Name",
    placeholder: "ex. Phone Bill",
  },
  {
    name: "amount",
    label: "Amount",
    type: "number",
    placeholder: "5000",
  },
  {
    name: "schedule",
    label: "Schedule",
    type: "select",
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
      { value: "quarter", label: "Quarter" },
      { value: "annually", label: "Annually" },
    ],
    placeholder: "Select Option",
  },
  {
    name: "startIn",
    label: "Start In",
    placeholder: "01/01/2025",
  },

  {
    name: "status",
    label: "Status",
    placeholder: "remaining or ended",
  },
];

// validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  amount: Yup.number()
    .transform((_, originalValue) => {
      return originalValue === "" ? undefined : Number(originalValue);
    })
    .typeError("Amount must be a number")
    .positive()
    .required(),
  schedule: Yup.mixed()
    .oneOf(["daily", "weekly", "monthly", "quarter", "annually"] as const)
    .defined(),
  startIn: Yup.date().required(),
  status: Yup.mixed().oneOf(["remaining", "completed", "paused"]),
});

const AddSpendingPage = () => {
  const { isCreatingSpending, createSpending } = useSpendings();

  const handleSubmit = (values: any, actions: any) => {
    // cast values from input to convert string  input fields to numbers
    const castedValues = validationSchema.cast(values);
    // execute mutation function
    createSpending(castedValues);
    actions.setSubmitting(false);
  };

  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={spendingFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Add Schedule"
        loadingStatus={isCreatingSpending}
        loadingTxt="Adding Schedule..."
      />
    </Box>
  );
};

export default AddSpendingPage;
