import { View, Text } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const Coming_Soon = () => {
  return (
    <View className="flex-1 bg-gray-900 items-center justify-center flex-row gap-x-3">
      <Animatable.Text
        animation={"tada"}
        iterationCount={1}
        delay={1000}
        className="text-2xl text-gray-400 font-semibold"
      >
        STAY
      </Animatable.Text>
      <Animatable.Text
        animation={"tada"}
        iterationCount={1}
        delay={1000}
        className="text-2xl text-gray-400 font-semibold"
      >
        TUNED!
      </Animatable.Text>
    </View>
  );
};

export default Coming_Soon;
