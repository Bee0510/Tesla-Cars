import { View, Text, FlatList, ImageBackground } from "react-native";
import React from "react";
import { ModelS } from "../../assets";
import Header from "../Car_Screen/Header";

const Car_List = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View>
      <ImageBackground source={image} className="h-screen items-center">
        <View>
          <Header />
          <View className="mt-10 justify-center items-center flex-col">
            <Text className="text-3xl font-bold">{name}</Text>
            <Text className=" text-[#5c5e62] text-base">
              Starting at $69,120
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Car_List;
