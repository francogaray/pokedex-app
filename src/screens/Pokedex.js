import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex() {
    console.log("SOY POKEDEX")
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsApi();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <Text>Pokedex Screen</Text>
        </View>
    );
}
