import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

const Headfunctions = () => {
  const [iconColor, setIconColor] = useState("yellow");
  const [icon, setIcon] = useState("lock");
  const handleIconLock = () => {
    if (icon === "lock") {
      setIcon("lock-open");
      setIconColor("gray");
    } else {
      setIcon("lock");
      setIconColor("yellow");
    }
  };

  const [fanColor, setFanColor] = useState("white");
  const [fanicon, setFanIcon] = useState("fan-off");
  const handleIconFan = () => {
    if (fanicon === "fan") {
      setFanIcon("fan-off");
      setFanColor("white");
    } else {
      setFanIcon("fan");
      setFanColor("gray");
    }
  };

  const [lightColor, setLightColor] = useState("yellow");
  const [lighticon, setLightIcon] = useState("lightning-bolt-outline");
  const handleIconLight = () => {
    if (lighticon === "lightning-bolt") {
      setLightIcon("lightning-bolt-outline");
      setLightColor("yellow");
    } else {
      setLightIcon("lightning-bolt");
      setLightColor("gray");
    }
  };

  const [carColor, setCarColor] = useState("white");
  const [caricon, setCarIcon] = useState("car-sport");
  const handleIconCar = () => {
    if (caricon === "car-sport") {
      setCarIcon("car-sport-outline");
      setCarColor("white");
    } else {
      setCarIcon("car-sport");
      setCarColor("gray");
    }
  };

  return (
    <View className="flex-row justify-evenly w-full gap-x-5 space-x-5">
      <TouchableOpacity onPress={handleIconLock}>
        <Entypo name={icon} size={30} color={iconColor} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleIconFan}>
        <MaterialCommunityIcons name="fan" size={30} color={fanColor} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleIconLight}>
        <MaterialCommunityIcons name={lighticon} size={30} color={lightColor} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleIconCar}>
        <Ionicons name={caricon} size={30} color={carColor} />
      </TouchableOpacity>
    </View>
  );
};

export default Headfunctions;
