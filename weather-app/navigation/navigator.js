import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import weatherData from "../screen/weatherData";
import weatherList from "../screen/weatherList";
const Stack = createStackNavigator();
export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homePage" component={weatherData} />
      <Stack.Screen name="weatherList" component={weatherList} />
    </Stack.Navigator>
  );
}
export default StackNavigator;
