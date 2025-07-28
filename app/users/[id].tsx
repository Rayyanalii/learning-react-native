import { useGetUsers } from "@/hooks/Users/useGetUsers";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const numericId = parseInt(id as string, 10);

  const { data } = useGetUsers();

  const filteredUser = data?.find((user) => user.id === numericId);

  return (
    <View className="flex-1 bg-primary">
      <Text className="text-white">{filteredUser?.name}</Text>
    </View>
  );
};

export default MovieDetails;
