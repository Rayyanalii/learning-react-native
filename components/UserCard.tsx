import { User } from "@/types/Users";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const UserCard = ({
  id,
  name,
  address,
  email,
  username,
  phone,
  website,
}: User) => {
  return (
    <Link href={`users/${id}`} asChild>
      <TouchableOpacity className="flex justify-center items-center w-[30%] h-20 mb-5 border border-neutral-400 rounded-xl p-4">
        <Text
          numberOfLines={1}
          className="text-white truncate font-semibold text-center"
        >
          {name}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default UserCard;
