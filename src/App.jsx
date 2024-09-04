import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

import { Toaster } from "./components/ui/toaster";


const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <h1>The project is up and running, check the readme for more information</h1>
    </QueryClientProvider>
  );
}
