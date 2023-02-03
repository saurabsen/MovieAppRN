import React from "react";
import Movies from "../screens/MoviesScreen";
import SearchResults from "../screens/SearchResultsScreen";
import TVShows from "../screens/TVShowsScreen";
import Details from "../screens/DetailsScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TabNavigator = createMaterialTopTabNavigator();

function Home() {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2F3D53",
        tabBarInactiveTintColor: "#bababa",
        tabBarIndicatorStyle: {
          backgroundColor: "#2F3D53",
        },
      })}
    >
      <TabNavigator.Screen name="Movies" component={Movies} />
      <TabNavigator.Screen name="Search Result" component={SearchResults} />
      <TabNavigator.Screen name="TV Shows" component={TVShows} />
    </TabNavigator.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies App"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#2F3D53",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.original_title,
            headerTitleStyle: { color: "#2F3D53" },
            headerBackTitle: "Back to list",
            headerTintColor: "blue",
            headerBackTitleVisible: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
