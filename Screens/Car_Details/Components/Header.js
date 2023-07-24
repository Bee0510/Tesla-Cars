import { View, Text } from "react-native";
import React from "react";
import { UserCircleIcon, Battery50Icon } from "react-native-heroicons/solid";

const CarHeader = () => {
  return (
    <View className="flex-row justify-between w-screen p-8">
      <View className="flex-col space-y-1">
        <Text className="text-white font-bold text-2xl">My Model S</Text>
        <View className="flex-row justify-start gap-x-2">
          <Battery50Icon size={30} color={"gray"} />
          <Text className="text-gray-400 font-bold text-lg">317 mi</Text>
        </View>
        <Text className="font-bold text-base text-gray-400">Parked</Text>
      </View>
      <UserCircleIcon size={50} color={"gray"} />
    </View>
  );
};

export default CarHeader;
