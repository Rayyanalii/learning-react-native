import { icons } from "@/imports/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

interface TabIconPropTypes {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconPropTypes) => {
  return (
    <>
      {focused ? (
        <View
          className={`flex-1 flex-row justify-center items-center bg-purple-300 w-full min-w-[112px] gap-2 rounded-full min-h-16 mt-4 overflow-hidden`}
        >
          <Image source={icon} tintColor={"#151312"} className="size-5" />
          <Text className="text-secondary text-base font-semibold mt-1">
            {title}
          </Text>
        </View>
      ) : (
        <View className="size-full justify-center items-center mt-4 rounded-full">
          <Image source={icon} tintColor={"#A8B5DB"} className="size-5" />
        </View>
      )}
    </>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#110066",
          borderRadius: 50,
          marginHorizontal: 15,
          marginBottom: 30,
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.saved} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
