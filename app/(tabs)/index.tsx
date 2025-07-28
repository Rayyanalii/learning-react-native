import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCard";
import { useGetUsers } from "@/hooks/Users/useGetUsers";
import { images } from "@/imports/images";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: userData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useGetUsers();

  const renderHeader = () => (
    <View className="pb-3">
      <Image source={images.icon} className="w-14 h-14 mt-20 mx-auto mb-5" />

      <SearchBar
        onPress={() => {
          router.push("/search");
        }}
        placeholder="Search for a movie"
      />

      <Text className="text-2xl font-semibold text-white mt-3 mb-3">
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
      <View className="flex-1 justify-center items-center bg-primary">
        <Text className="text-white mb-4">{error.message}</Text>
        <Text
          onPress={() => refetch()}
          className="text-white underline text-base"
        >
          Tap to Retry
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      className="flex-1 px-5 bg-primary"
      contentContainerStyle={{ paddingBottom: 100 }}
      data={userData}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <UserCard {...item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      columnWrapperClassName="justify-between items-center"
      refreshControl={
        <RefreshControl
          refreshing={isFetching && !isLoading}
          onRefresh={refetch}
          colors={["#ffffff"]}
          tintColor="#ffffff"
          progressBackgroundColor="#1e1e1e"
          progressViewOffset={30}
        />
      }
    />
  );
}
