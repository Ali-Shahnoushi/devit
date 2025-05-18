import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AOSInit from "./utils/aos";

const queryClient = new QueryClient();
createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AOSInit />
    <App />
    <Toaster
      toastOptions={{
        className: "!bg-base-200 !text-base-content",
      }}
    />
  </QueryClientProvider>,
);
