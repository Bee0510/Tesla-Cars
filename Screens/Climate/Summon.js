import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Coming_Soon from "./Coming_Soon";

const Summon = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return <Coming_Soon />;
};

export default Summon;
