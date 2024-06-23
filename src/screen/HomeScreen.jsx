// HomeScreen.js

import React from "react";
import { StyleSheet, Text, View, StatusBar, ImageBackground, SafeAreaView, Image, TouchableOpacity, Platform } from "react-native"; // Added Platform import
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.background}
      >
        <Image
          style={styles.logo}
          source={{ uri: 'data:image/png;base64,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' }}
        />
        <View>
          <Text style={styles.title}>TrendyMart</Text>
          <Text style={styles.subTitle}>Your one-stop shop for all things trendy!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.login]}
            onPress={() => navigation.navigate("Login")} 
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.register]}
            onPress={() => navigation.navigate("Signup")} 
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity
          style={[styles.button, styles.customButton]}
          onPress={() => navigation.navigate("ButtonScreen")} 
        >
          <Text style={styles.loginText}>Show Buttons</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: Platform.OS === "android" ? 20 : 0, // Add marginBottom only for Android
  },
  button: {
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10, // Add marginBottom for all buttons
  },
  login: {
    backgroundColor: "#007bff", 
  },
  register: {
    backgroundColor: "#28a745", 
  },
  customButton: {
    backgroundColor: "purple", // Example color
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
});

export default HomeScreen;
