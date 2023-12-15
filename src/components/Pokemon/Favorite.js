import { set } from "lodash";
import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
    isPokemonFavoriteApi,
    addPokemonFavoriteApi,
    removePokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = (props) => {
    const { id } = props;
    const [isFavorite, setIsFavorite] = useState(undefined);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;
    const [reloadCheck, setReloadCheck] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id);
                setIsFavorite(response);
            } catch (error) {
                setIsFavorite(false);
            }
        })();
    }, [id, reloadCheck]);

    const onReloadCheck = () => {
        setReloadCheck((prev) => !prev);
    };

    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(id);
            onReloadCheck();
        } catch (error) {
            throw error;
        }
    };

    const removeFavorite = async () => {
        try {
            await removePokemonFavoriteApi(id);
            onReloadCheck();
        } catch (error) {
            throw error;
        }
    };

    return (
        <Icon
            name="heart"
            color="#fff"
            size={20}
            onPress={isFavorite ? removeFavorite : addFavorite}
            style={{ marginBottom: 20 }}
        />
    );
};

export default Favorite;
