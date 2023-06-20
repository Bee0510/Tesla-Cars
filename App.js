import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./Screens/Homepage";
import Car_Info from "./Screens/Car_Details/Car_Info";
import Climate_Screen from "./Screens/Climate/climate";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Details" component={Car_Info} />
          <Stack.Screen name="Climate" component={Climate_Screen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
