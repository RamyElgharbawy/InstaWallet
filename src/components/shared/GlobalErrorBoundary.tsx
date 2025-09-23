/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, type ReactNode } from "react";
import { Alert, AlertIcon, Box, Button, VStack } from "@chakra-ui/react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class GlobalErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload(); // force refresh app
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box p={6}>
          <VStack spacing={4}>
            <Alert status="error">
              <AlertIcon />
              Oops! Something went wrong.
            </Alert>
            <Button colorScheme="red" onClick={this.handleReload}>
              Reload App
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
