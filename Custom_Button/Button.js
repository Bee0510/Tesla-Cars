import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import React from "react";

const Button_Style = (props) => {
  const { title, color, press } = props;
  return (
    <TouchableOpacity>
      <Pressable
        onPress={press}
        className={` w-80 h-12 items-center justify-center rounded-3xl bg-[#171A20CC] `}
      >
        <Text className="text-white ">{title}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default Button_Style;
