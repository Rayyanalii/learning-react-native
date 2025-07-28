import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import queryClient from "../config/queryClient";
import "./globals.css";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
