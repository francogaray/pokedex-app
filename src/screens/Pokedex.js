import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadPokemons();
    }, [loadPokemons]);

    const loadPokemons = async () => {
        try {
            setLoading(true);
            const response = await getPokemonsApi(nextUrl);
            setNextUrl(response.next);
            const pokemonsArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonDetailsByUrlApi(
                    pokemon.url
                );
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other["official-artwork"]
                        .front_default,
                });
            }

            setPokemons([...pokemons, ...pokemonsArray]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <PokemonList
                pokemons={pokemons}
                loadPokemons={loadPokemons}
                isNext={nextUrl}
                isLoading={loading}
            />
        </SafeAreaView>
    );
}
