import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PokedexChild"
                component={PokedexScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pokemom"
                component={PokemonScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
