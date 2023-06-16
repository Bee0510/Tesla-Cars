import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import Car from "./Car";
import Car_List from "../Car_Items/Car_List";

const Car_Details = () => {
  return (
    <View>
      <FlatList
        data={Car}
        renderItem={({ item }) => <Car_List car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default Car_Details;
