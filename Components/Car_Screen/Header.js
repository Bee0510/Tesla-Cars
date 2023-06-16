import { View, Text, Image } from "react-native";
import React from "react";
import { Logo, Menu } from "../../assets";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center w-96">
      <Image source={Logo} resizeMode="contain" className="h-20 w-36" />
      <Image source={Menu} resizeMode="contain" className="h-20 w-10" />
    </View>
  );
};

export default Header;
