import {
  View,
  Text,
  Linking,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../Car_Screen/Header";
import Button_Style from "../../Custom_Button/Button";
import { Asset } from "expo-asset";
import { Audio } from "expo-av";

const Car_List = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  const navigation = useNavigation();

  const playDrive = async () => {
    try {
      const soundOb = new Audio.Sound();
      const soundAsset = Asset.fromModule(require("../../assets/horn.mp3"));
      await soundAsset.downloadAsync();
      await soundOb.loadAsync(soundAsset);
      await soundOb.playAsync();
    } catch (e) {
      console.error(error);
    }
  };

  return (
    <View>
      <ImageBackground
        source={image}
        className="h-screen items-center bg-gray-900"
      >
        <View className="flex-col items-center justify-evenly">
          <Header />
          <View className="mt-10 justify-center items-center flex-col">
            <Text className="text-3xl font-bold text-gray-300">{name}</Text>
            <Text className=" text-gray-500 text-base">
              {tagline} {""}
              <Text className=" text-[#5c5e62] text-base">{taglineCTA}</Text>
            </Text>
          </View>
          <View className="mt-96 flex-col justify-between space-y-7 h-40 items-center">
            <Button_Style
              title={"RACE"}
              animationType={"pulse"}
              press={() => {
                navigation.navigate("Details");
                playDrive();
              }}
            />

            <Button_Style
              title={"GET ONE"}
              animationType={"pulse"}
              press={() => {
                const link = "https://www.tesla.com/";
                Linking.openURL(link);
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Car_List;
