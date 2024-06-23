import React, { useState } from "react";
import {
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
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Validation: Check if any field is empty
    if (!username.trim() || !mobile.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    // Validation: Check if password length is less than 6 characters
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Your registration logic here
    console.log("Username:", username);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Password:", password);
    // Example: Perform API call for registration, etc.

    // Reset fields and error state after successful registration
    setUsername("");
    setMobile("");
    setEmail("");
    setPassword("");
    setError("");

    // Display an alert or navigate to another screen
    if (Platform.OS === "web") {
      alert("Registration Successful");
    } else {
      Alert.alert("Success", "Registration Successful", [{ text: "OK" }]);
    }

    // Navigate to LoginScreen after successful registration
    navigation.navigate("Login");
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
          <Text style={styles.createAccountText}>Create Account</Text>

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
            <AntDesign
              name="mobile1"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              placeholder="Mobile"
              placeholderTextColor="#9A9A9A"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign
              name="mail"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#9A9A9A"
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              secureTextEntry={true}
              placeholderTextColor="#9A9A9A"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleRegister}
          >
            <LinearGradient
              colors={["#F97794", "#623AA2"]}
              style={styles.linearGradient}
            >
              <Text style={styles.signUpButtonText}>Register</Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialMediaContainer}
            onPress={() => console.log("Social media signup pressed")}
          >
            <Text style={styles.footerText}>
              Or create using social media
            </Text>
            <View style={styles.socialIconsContainer}>
              <Entypo
                name="facebook-with-circle"
                size={30}
                color="#3b5998"
                style={styles.socialIcon}
              />
              <Entypo
                name="twitter-with-circle"
                size={30}
                color="#1DA1F2"
                style={styles.socialIcon}
              />
              <AntDesign
                name="google"
                size={30}
                color="#DB4437"
                style={styles.socialIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
  createAccountText: {
    textAlign: "center",
    fontSize: 30,
    color: "#262626",
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
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
  signUpButton: {
    width: "100%",
    marginTop: 20,
  },
  signUpButtonText: {
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
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  socialMediaContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default SignupScreen;
