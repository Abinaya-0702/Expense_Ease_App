import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import axios from "axios";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const apiUrl = "https://your-api-endpoint.com/login";
    const data = {
      username: username,
      password: password,
    };

    axios
      .post(apiUrl, data)
      .then((response) => {
        const userToken = response.data.token;
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WELCOME!</Text>
      <Image
        source={require("./assets/login_page.jpg")}
        style={styles.headerImage}
      />
      <View style={styles.loginBox}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          value={username}
          onChange={(e) => setUsername(e)}
          style={styles.input}
          placeholder="Enter your username"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />

        <Button
          title="Login"
          onPress={() => {
            handleLogin();
            navigation.navigate("Home");
          }}
          color="#702670"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#702670",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "white",
    textAlign: "center",
    fontSize: 34,
  },
  headerImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 300,
    height: 300,
    bor: 10,
    marginTop: 10,
  },
  loginBox: {
    backgroundColor: "white",
    width: 300,
    height: 300,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#702670",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
