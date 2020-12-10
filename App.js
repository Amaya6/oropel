
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";
import About from "./screens/About";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffff",
          
        },
        headerTintColor: "#110fa3",
        headerTitleStyle: {
          fontWeight:"bold",
          
        },
      }}
    >
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "Lista de Productos ", }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Registrar Producto " }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "Detalle Producto" }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "Acerca de" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
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
