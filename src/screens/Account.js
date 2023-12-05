import { View, Text } from "react-native";
import React from "react";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";

export default function Account() {
    const auth = undefined;

    return (
        <View>
            {auth ? <UserData /> : <LoginForm />}
            <Text>Account</Text>
        </View>
    );
}
