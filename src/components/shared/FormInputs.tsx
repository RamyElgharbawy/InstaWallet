import { useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
// import type { FieldMetaProps, FieldInputProps } from "formik";

type InputComponentProps = {
  label?: string;
  name: string;
  type?: string;
  options?: { value: string; label: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const FormInput = ({
  label,
  name,
  type = "text",
  options,
  ...props
}: InputComponentProps) => {
  const [field, meta, helpers] = useField(name);

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <Textarea {...field} {...props} />;
      case "select":
        return (
          <Select {...field} {...props}>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        );
      case "checkbox":
        return <Checkbox {...field} {...props} isChecked={field.value} />;
      case "switch":
        return <Switch {...field} {...props} isChecked={field.value} />;
      case "number":
        return (
          <NumberInput
            {...props}
            value={field.value}
            onChange={(val) => helpers.setValue(val)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        );
      default:
        return <Input {...field} {...props} type={type} />;
    }
  };

  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      {renderInput()}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
