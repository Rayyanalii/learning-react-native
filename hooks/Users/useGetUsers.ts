// src/hooks/useUsers.js
import { fetchUsers } from "@/apis/usersApi";
import { User } from "@/types/Users";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
  });
};
