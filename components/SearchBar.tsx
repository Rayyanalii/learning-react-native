import { icons } from "@/imports/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarPropTypes {
  onPress: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarPropTypes) => {
  return (
    <View className="flex-row items-center rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
