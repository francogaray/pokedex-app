import { StyleSheet, Text, View } from "react-native";
import React from "react";
import getColorByPokemonTypes from "../../utils/getColorByPokemonType";

export default function Type(props) {
    const { types } = props;

    return (
        <View style={styles.content}>
            {types.map((type, idx) => (
                <View
                    key={idx}
                    style={{
                        ...styles.pill,
                        backgroundColor: getColorByPokemonTypes(type.type.name),
                    }}
                >
                    <Text style={styles.text}>{type.type.name}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    text: {
        color: "#ffff",
        textTransform: "capitalize",
        fontWeight: "600"
    },
});
