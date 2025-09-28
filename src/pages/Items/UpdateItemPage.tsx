/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Spinner } from "@chakra-ui/react";
import { AppForm } from "../../components/shared/AppForm";
import * as Yup from "yup";
import { useItems } from "../../hooks/itemsHook";
import { formatDate } from "../../utils/dateFormat";

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

const UpdateItemPage = () => {
  const { item, isLoadingItem, isUpdating, updateItem } = useItems();

  // validate item data
  const itemData = item?.data || {};

  // normalize values from API
  const normalizedData = {
    id: itemData.id || "",
    type: itemData.type || "",
    title: itemData.title || "",
    price: itemData.price ? Number(itemData.price) : "",
    purchaseDate: formatDate(itemData.purchaseDate),
    numberOfMonths: itemData.numberOfMonths
      ? Number(itemData.numberOfMonths)
      : "",
    startIn: formatDate(itemData.startIn),
    endIn: formatDate(itemData.endIn),
    notes: itemData.notes || "",
  };

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
      defaultValue: normalizedData.type,
    },
    {
      name: "title",
      label: "Title",
      placeholder: "ex. something",
      defaultValue: normalizedData.title,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "ex. 3000",
      defaultValue: normalizedData.price,
    },
    {
      name: "purchaseDate",
      label: "Purchase Date",
      placeholder: "YYYY-MM-DD",
      defaultValue: formatDate(normalizedData.purchaseDate),
    },
    {
      name: "numberOfMonths",
      label: "Number Of Months",
      type: "number",
      placeholder: "12",
      defaultValue: normalizedData.numberOfMonths,
    },
    {
      name: "startIn",
      label: "Start In",
      placeholder: "YYYY-MM-DD",
      defaultValue: formatDate(normalizedData.startIn),
    },
    {
      name: "endIn",
      label: "End In",
      placeholder: "YYYY-MM-DD",
      defaultValue: formatDate(normalizedData.endIn),
    },
    {
      name: "notes",
      label: "Notes",
      type: "textarea",
      placeholder: "Item details",
      defaultValue: normalizedData.notes,
    },
  ];

  const handleSubmit = (values: any, actions: any) => {
    // cast values from input to convert string  input fields to numbers
    const castedValues = validationSchema.cast(values);
    // execute mutation function
    updateItem({ itemId: normalizedData.id, values: castedValues });
    actions.setSubmitting(false);
  };

  if (isLoadingItem) {
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <Spinner />
      </Box>
    );
  }

  return (
    <Box ml={{ base: 0, md: 60 }}>
      <AppForm
        fields={itemFields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        submitText="Update Item"
        loadingStatus={isUpdating}
        loadingTxt="Updating...."
      />
    </Box>
  );
};

export default UpdateItemPage;
