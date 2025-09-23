import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import GlobalErrorBoundary from "./components/shared/GlobalErrorBoundary.tsx";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ChakraProvider>
          <GlobalErrorBoundary>
            <App />
          </GlobalErrorBoundary>
        </ChakraProvider>
      </Router>
    </QueryClientProvider>
  </CookiesProvider>
);
