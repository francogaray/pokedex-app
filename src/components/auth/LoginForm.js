import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
    const [error, setError] = useState("");

    const { login, logout } = useAuth();


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (data) => {
            setError("");
            const { username, password } = data;
            console.log("Formulario enviado...", data);
            if (username !== user.username || password !== user.password) {
                console.log("El usuario o la contraseña no son correctos...");
                setError("El usuario o la contraseña no son correctos...");
            } else {
                console.log("Login correcto...");
                login(userDetails);
            }
        },
    });

    return (
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue("username", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                autoCapitalize="none"
                secureTextEntry
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue("password", text)}
            />
            <Button title="Entrar" onPress={formik.handleSubmit} />
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};

export default LoginForm;

function initialValues() {
    return {
        username: "",
        password: "",
    };
}

function validationSchema() {
    return {
        username: Yup.string().required("El usuario es obligatorio..."),
        password: Yup.string().required("La contraseña es obligatoria"),
    };
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
    },
});
