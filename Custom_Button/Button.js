import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const Button_Style = (props) => {
  const { title, color, press, animationType } = props;
  return (
    <TouchableOpacity onPress={press}>
      <Animatable.View
        className="h-16 w-80 rounded-full bg-gray-700 items-center justify-center"
        animation={animationType}
        iterationCount={"infinite"}
      >
        <Text className="font-bold text-base text-white">{title}</Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default Button_Style;
