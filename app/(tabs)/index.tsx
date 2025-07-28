import SearchBar from "@/components/SearchBar";
import { useGetUsers } from "@/hooks/Users/useGetUsers";
import { images } from "@/imports/images";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetUsers();

  const renderHeader = () => (
    <View className="pb-3">
      <Image source={images.icon} className="w-14 h-14 mt-20 mx-auto mb-5" />

      <SearchBar
        onPress={() => {
          router.push("/search");
        }}
        placeholder="Search for a movie"
      />

      <Text className="text-xl font-semibold text-white mt-3 mb-3">
        Latest Movies
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-white">{error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      className="flex-1 px-5 bg-primary"
      contentContainerStyle={{ paddingBottom: 100 }}
      data={data}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text className="text-white text-base mb-2">{item.name}</Text>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
