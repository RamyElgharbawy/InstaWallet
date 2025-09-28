/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { AppForm } from "../../components/shared/AppForm";
import * as Yup from "yup";
import { useFellows } from "../../hooks/fellowsHook";
import { formatDate } from "../../utils/dateFormat";

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

const UpdateFellowPage = () => {
  // get fellow data
  const { fellow, isUpdatingFellow, updateFellow } = useFellows();

  // validate fellow data
  const fellowData = fellow?.data || {};
  // normalize values from API
  const normalizedData = {
    id: fellowData.id || "",
    manager: fellowData.manager || "",
    amount: fellowData.amount ? Number(fellowData.amount) : "",
    turnMonth: fellowData.turnMonth ? Number(fellowData.turnMonth) : "",
    numberOfMonths: fellowData.numberOfMonths
      ? Number(fellowData.numberOfMonths)
      : "",
    startIn: formatDate(fellowData.startIn),
    endIn: formatDate(fellowData.endIn),
    status: fellowData.status || "",
  };

  // Form Field
  const fellowFields = [
    {
      name: "manager",
      label: "Fellow Manager",
      placeholder: "ex.Ahmed",
      defaultValue: normalizedData.manager,
    },
    {
      name: "amount",
      label: "Amount",
      type: "number",
      placeholder: "5000",
      defaultValue: normalizedData.amount,
    },
    {
      name: "startIn",
      label: "Start In",
      placeholder: "01/01/2025",
      defaultValue: normalizedData.startIn,
    },
    {
      name: "endIn",
      label: "End In",
      placeholder: "01/01/2026",
      defaultValue: normalizedData.endIn,
    },
    {
      name: "numberOfMonths",
      label: "Number Of Months",
      type: "number",
      placeholder: "12",
      defaultValue: normalizedData.numberOfMonths,
    },
    {
      name: "turnMonth",
      label: "Turn Month",
      type: "number",
      placeholder: "ex. 1 or 2",
      defaultValue: normalizedData.turnMonth,
    },
  ];

  const handleSubmit = (values: any, actions: any) => {
    // cast values from input to convert string  input fields to numbers
    const castedValues = validationSchema.cast(values);
    // execute mutation function
    updateFellow({ fellowId: normalizedData.id, values: castedValues });

    actions.setSubmitting(false);
  };
  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={fellowFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Update Fellow"
        loadingStatus={isUpdatingFellow}
        loadingTxt="Updating...."
      />
    </Box>
  );
};

export default UpdateFellowPage;
