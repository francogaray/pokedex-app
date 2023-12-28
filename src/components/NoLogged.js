import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver esta pantalla tienes que iniciar sesión!</Text>
            <Button title="Ir a login" onPress={ () => navigation.navigate("Account")} />
        </View>
    );
};

export default NoLogged;

const styles = StyleSheet.create({
    content:{
        marginVertical: 50,
        paddingHorizontal: 20,

    },
    text:{
        textAlign: 'center',
        marginBottom: 10,
    }
});
