import { View, Text, FlatList, ImageBackground } from "react-native";
import React from "react";

import Header from "../Car_Screen/Header";
import Button_Style from "../../Custom_Button/Button";

const Car_List = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View>
      <ImageBackground source={image} className="h-screen items-center">
        <View className="flex-col items-center justify-evenly">
          <Header />
          <View className="mt-10 justify-center items-center flex-col">
            <Text className="text-3xl font-bold">{name}</Text>
            <Text className=" text-[#5c5e62] text-base">
              {tagline} {""}
              <Text className=" text-[#5c5e62] text-base">{taglineCTA}</Text>
            </Text>
          </View>
          <View className="mt-96 flex-col justify-around space-y-7 h-28">
            <Button_Style title={"CUSTOM ORDER"} color={"#171A20CC"} />
            <Button_Style title={"EXISTING INVENTORY"} color={"#171A20CC"} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Car_List;
