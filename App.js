import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
require("dotenv").config();

import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./src/Components/Auth/Landing";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.API_KEY,

  authDomain: process.env.AUTH_DOMAIN,

  projectId: process.env.PROJECT_ID,

  storageBucket: process.env.STORAGE_BUCKET,

  messagingSenderId: process.env.MESSAGING_SENDER_ID,

  appId: process.env.APP_ID,

  measurementId: process.env.MEASUREMENT_ID,
};

// not running any firebase instances at the moment
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
