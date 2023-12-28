import { SafeAreaView, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { getPokemonsFavoritesApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Favorite() {
    const { auth } = useAuth();
    const [pokemons, setPokemons] = useState([]);
    console.log(pokemons);

    useEffect(() => {
        if (auth) {
            (async () => {
                const response = await getPokemonsFavoritesApi();

                const pokemonsArray = [];
                for await (const id of response) {
                    const pokemonDetails = await getPokemonDetailsApi(id);
                    pokemonsArray.push({
                        id: pokemonDetails.id,
                        name: pokemonDetails.name,
                        type: pokemonDetails.types[0].type.name,
                        order: pokemonDetails.order,
                        image: pokemonDetails.sprites.other["official-artwork"]
                            .front_default,
                    });
                }
                setPokemons(pokemonsArray)
            })();
        }
    }, [auth, pokemons]);

    return !auth ? (
        <Text>Usuario no logeado</Text>
    ) : (
        <PokemonList pokemons={pokemons} />
        );
}
