import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Screens/Homepage";
import Car_Info from "./Screens/Car_Details/Car_Info";
import Climate_Screen from "./Screens/Climate/climate";
import Control from "./Screens/Climate/Control";
import Location from "./Screens/Climate/Location";
import Summon from "./Screens/Climate/Summon";
import Security from "./Screens/Climate/Security";
import Update from "./Screens/Climate/Update";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Details" component={Car_Info} />
          <Stack.Screen name="Climate" component={Climate_Screen} />
          <Stack.Screen name="Control" component={Control} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Summon" component={Summon} />
          <Stack.Screen name="Security" component={Security} />
          <Stack.Screen name="Update" component={Update} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
