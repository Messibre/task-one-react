import { QueryClient } from "@tanstack/react-query";

/** One place to change how every query and mutation behaves by default. */
export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}
