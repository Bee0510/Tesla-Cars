import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CarHeader from "./Components/Header";
import Car from "../../Components/Car_Screen/Car";
import { Carpng } from "../../assets";
import Headfunctions from "./Components/Headfunctions";
import Features from "./Components/Features";

const Car_Info = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-gray-900 items-center justify-center">
      <ScrollView>
        {/* <View className="flex-col justify-center items-center m-10 mr-5 ml-5"> */}
        <CarHeader />
        <View>
          <Image
            source={Carpng}
            className="w-screen h-72 items-center justify-center mt-12 "
          />
        </View>
        <Headfunctions />
        <Features />
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Car_Info;
