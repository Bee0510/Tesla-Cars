import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import data from "../data";
import { useNavigation } from "@react-navigation/native";

const Features = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-col mt-5">
      <View className="flex-row justify-between w-screen p-4"></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate(`${item.href}`)}>
            <View className="flex-row justify-between w-screen p-4">
              <View className="flex-row justify-between gap-x-5">
                <MaterialCommunityIcons
                  name={item.iconName}
                  color={"gray"}
                  size={30}
                />
                <Text className="text-white font-bold text-lg">
                  {item.name}
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={30}
                color="gray"
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Features;
