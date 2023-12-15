import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";
import { getPokemonsFavoritesApi } from "../api/favorite";

export default function Favorite() {
    const checkFavorites = async () => {
        const response = await getPokemonsFavoritesApi();
        console.log("response Screen Fav", response);
    };

    return (
        <SafeAreaView>
            <Text>Favorite</Text>
            <Button title="Obtener Favoritos" onPress={checkFavorites} />
        </SafeAreaView>
    );
}
