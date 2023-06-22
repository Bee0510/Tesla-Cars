import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Climate } from "../../assets";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

const Climate_Screen = () => {
  const playStart = async () => {
    try {
      const soundOb = new Audio.Sound();
      const soundAsset = Asset.fromModule(require("../../assets/CarStart.mp3"));
      await soundAsset.downloadAsync();
      await soundOb.loadAsync(soundAsset);
      await soundOb.playAsync();
    } catch (e) {
      console.error(error);
    }
  };

  const [count, setCount] = useState(54);

  const increaseCount = () => {
    if (count < 90) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 43) {
      setCount(count - 1);
    }
  };

  const [iconColor, setIconColor] = useState("red");
  const [doorColor, setDoorColor] = useState("gray");
  const [text, settext] = useState("Off");
  const [Vent, setVent] = useState("Vent Off");

  const handleText = () => {
    if (text === "Off") {
      setIconColor("green");
      settext("On");
      playStart();
    } else {
      settext("Off");
      setIconColor("red");
    }
  };

  const handleVent = () => {
    if (Vent === "Vent Off") {
      setDoorColor("green");
      setVent("Vent On");
    } else {
      setDoorColor("gray");
      setVent("Vent Off");
    }
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-col justify-center items-center">
        <Image source={Climate} className="w-screen h-4/5" />
        <View className="flex-row items-center justify-center gap-4">
          <Text className="text-gray-400 text-lg">Interior {count}°F</Text>
          <Text className="text-gray-400 text-lg">Exterior 74°F</Text>
        </View>

        <View className="flex-row justify-center mt-10 items-center gap-x-12">
          <TouchableOpacity onPress={handleText}>
            <View className="flex-col justify-center items-center">
              <MaterialCommunityIcons
                name="power"
                size={40}
                color={iconColor}
              />
              <Text className="text-white">{text}</Text>
            </View>
          </TouchableOpacity>

          <View className="flex-row justify-around items-center gap-x-2">
            <TouchableOpacity onPress={decreaseCount}>
              <Entypo name="chevron-left" size={30} color="gray" />
            </TouchableOpacity>
            <Text className="text-3xl text-white">{count}</Text>
            <TouchableOpacity onPress={increaseCount}>
              <Entypo name="chevron-right" size={30} color="gray" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleVent}>
            <View className="flex-col justify-center items-center">
              <MaterialCommunityIcons
                name="car-door"
                size={40}
                color={doorColor}
              />
              <Text className="text-white">{Vent}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Climate_Screen;
