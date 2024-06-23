import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and Password are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // Example: Perform API call for login, etc.

    // Reset fields and error state after successful login
    setUsername("");
    setPassword("");
    setError("");

    // Display an alert or navigate to another screen
    showAlert("Success", "Login Successful");
  };

  const showAlert = (title, message) => {
    if (Platform.OS === "web") {
      // Custom alert for web
      alert(`${title}\n\n${message}`);
    } else {
      // Use Alert.alert for Android and iOS
      Alert.alert(title, message, [{ text: "OK" }]);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.formContainer}>
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={styles.logo}
          />
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.signInText}>Sign in to your account</Text>

          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor="#9A9A9A"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Fontisto
              name="locked"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => console.log("Forgot password pressed")}
          >
            <Text style={styles.forgotPasswordText}>
              Forgot your password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={handleLogIn}>
            <LinearGradient
              colors={["#F97794", "#623AA2"]}
              style={styles.linearGradient}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createAccountContainer}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.createAccountText}>
              Don't have an account?{" "}
              <Text style={styles.createText}>Create</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    marginLeft: 600,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 50,
  },
  helloText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 10,
  },
  signInText: {
    fontSize: 18,
    color: "#262626",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: "#262626",
    outline: "none", 
    borderWidth: 0, 
    appearance: "none", 
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    width: "90%",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#F97794",
    fontSize: 15,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  signInButton: {
    marginTop: 20,
  },
  signInButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  linearGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  createAccountContainer: {
    marginTop: 20,
  },
  createAccountText: {
    fontSize: 16,
    color: "#262626",
    textAlign: "center",
  },
  createText: {
    textDecorationLine: "underline",
    color: "#F97794",
    fontWeight: "bold",
  },
});

export default LoginScreen;
