import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Toaster } from "./components/ui/toaster";
import Main from "./components/custom/main/main";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Main />
    </QueryClientProvider>
  );
}
