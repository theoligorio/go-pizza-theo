import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from "../Screens/SignIn";
import { Requests } from "../Screens/Requests";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Screen name="Request" component={Requests} options={{headerShown: false}}/>
    </Navigator>
  );
}