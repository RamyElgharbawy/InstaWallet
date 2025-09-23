import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  status: any;
  message: string;
  code?: string;
}

const AppAlert = ({ status, message, code }: IProps) => {
  return (
    <Alert status={status} mt={3}>
      <AlertIcon />
      {status === "error" ? (
        <AlertTitle textDecoration={"underline"}>Error ! {code}</AlertTitle>
      ) : null}
      {message === "Request failed with status code 404"
        ? "There is no data to display"
        : message}
    </Alert>
  );
};

export default AppAlert;
