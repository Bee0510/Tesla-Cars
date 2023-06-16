import { View, Text, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModelS, tesla } from "../assets";
import Header from "../Components/Car_Screen/Header";
import Car_Details from "../Components/Car_Screen/Car_Details";

const Homepage = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Car_Details />
    </SafeAreaView>
  );
};

export default Homepage;