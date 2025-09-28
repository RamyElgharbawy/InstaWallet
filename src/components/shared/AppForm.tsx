/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, VStack, HStack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import FormInput from "./FormInputs";

export type FormField = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  defaultValue?: any;
  [key: string]: any;
};

type AppFormProps = {
  fields: FormField[];
  onSubmit: (values: any, actions: any) => void;
  validationSchema?: any;
  initialValues?: any;
  submitText?: string;
  buttons?: React.ReactNode;
  loadingStatus?: boolean;
  loadingTxt?: string;
};

export const AppForm = ({
  fields,
  onSubmit,
  validationSchema,
  initialValues = {},
  submitText = "Submit",
  buttons,
  loadingStatus,
  loadingTxt = "Submitting...",
}: AppFormProps) => {
  // Generate initial values from fields if not provided
  const defaultInitialValues = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || initialValues[field.name] || "";
    return acc;
  }, {} as Record<string, any>);

  return (
    <Box p={4} maxW="lg">
      <Formik
        enableReinitialize
        initialValues={defaultInitialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <VStack spacing={4}>
            {fields.map(({ defaultValue, ...field }) => (
              <FormInput
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                options={field.options}
                {...field}
              />
            ))}

            <HStack spacing={4} w="full">
              <Button
                type="submit"
                colorScheme="green"
                isLoading={loadingStatus}
                loadingText={loadingTxt}
                disabled={loadingStatus}
                flex={1}
              >
                {submitText}
              </Button>
              {buttons}
            </HStack>
          </VStack>
        </Form>
      </Formik>
    </Box>
  );
};
