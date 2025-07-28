// src/hooks/useUsers.js
import { fetchUserById } from "@/apis/usersApi";
import { User } from "@/types/Users";
import { useQuery } from "@tanstack/react-query";

export const useGetUserById = (id: number) => {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: () => fetchUserById(id),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
  });
};
