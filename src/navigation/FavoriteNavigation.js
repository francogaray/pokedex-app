import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";
import React from "react";

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorite"
                component={Favorite}
                options={{ title: "", headerTransparent: true }}
            />
            <Stack.Screen
                name="Pokemon"
                component={PokemonScreen}
                options={{
                    title: "",
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default FavoriteNavigation;
