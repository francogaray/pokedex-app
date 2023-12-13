import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import useAuth from "../../hooks/useAuth";

const UserData = () => {
    const { auth, logout } = useAuth();

    return (
        <View style={styles.content}>
            <View style={styles.titleBlog}>
                <Text style={styles.title}>Bienvenido,</Text>
                <Text
                    style={styles.title}
                >{`${auth.firstName} ${auth.lastName}`}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu
                    title="Nombre"
                    text={`${auth.firstName} ${auth.lastName}`}
                />
                <ItemMenu title="Username" text={`${auth.username}`} />
                <ItemMenu title="Email" text={`${auth.email}`} />
                <ItemMenu title="Total favoritos" text={`0 pokemons`} />
            </View>
            <Button title="Desconectarse" onPress={logout} style={styles.btnLogout} />
        </View>
    );
};

export default UserData;

const ItemMenu = (props) => {
    const { title, text } = props;

    return (
        <View style={styles.itemMenu}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    titleBlog: {
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    dataContent: {
        marginBottom: 20,
    },
    itemMenu:{
        flexDirection: "row",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#cfcfcf"
    },
    itemTitle: {
        fontWeight: "bold",
        paddingRight: 10,
        width: 120,
    },
    btnLogout: {
        paddingTop:20,
    },

});
