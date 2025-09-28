/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@chakra-ui/react";
import { AppForm } from "../../components/shared/AppForm";
import * as Yup from "yup";
import { useItems } from "../../hooks/itemsHook";

// Form Field
const itemFields = [
  {
    name: "type",
    label: "Item Type",
    type: "select",
    options: [
      { value: "purchaseItem", label: "Purchasing Item" },
      { value: "loan", label: "Loan" },
    ],
  },
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
    placeholder: "YYYY-MM-DD",
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
    placeholder: "YYYY-MM-DD",
  },
  {
    name: "endIn",
    label: "End In",
    placeholder: "YYYY-MM-DD",
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
  type: Yup.string().oneOf(["purchaseItem", "loan"]).required("Type Required"),
  title: Yup.string().required("Title Required"),
  price: Yup.number()
    .transform((_, originalValue) => {
      return originalValue === "" ? undefined : Number(originalValue);
    })
    .typeError("Price must be a number")
    .min(1, "Price must be positive number")
    .required("Price is required"),
  purchaseDate: Yup.date().required(),
  numberOfMonths: Yup.number()
    .transform((_, originalValue) =>
      originalValue === "" ? undefined : Number(originalValue)
    )
    .typeError("Number of months must be a number")
    .required("Number of months is required"),
  startIn: Yup.date().required(),
  endIn: Yup.date().required(),
  notes: Yup.string().notRequired(),
});

const AddItemPage = () => {
  const { isCreating, createItem } = useItems();

  const handleSubmit = (values: any, actions: any) => {
    // cast values from input to convert string  input fields to numbers
    const castedValues = validationSchema.cast(values);
    // execute mutation function
    createItem(castedValues);

    actions.setSubmitting(false);
  };

  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={itemFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Add Item"
        loadingStatus={isCreating}
      />
    </Box>
  );
};

export default AddItemPage;
