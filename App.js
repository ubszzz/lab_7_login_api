import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            title: "หน้าแรก",
            headerStyle: {
              backgroundColor: "#FF7F50",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            title: "โปรไฟล์",
            headerStyle: {
              backgroundColor: "#FF7F50",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            title: "สมัครสมาชิก",
            headerStyle: {
              backgroundColor: "#FF7F50",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: "เข้าสู่ระบบ",
            headerStyle: {
              backgroundColor: "#FF7F50",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
