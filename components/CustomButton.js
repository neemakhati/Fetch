import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { colors } from "../config/theme";
import firebase from "../screens/firebase"; // Import the correct firebase package

export default function CustomButton({ label,email,password }) {
  const { theme } = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signup successful
        console.log("User registered:", userCredential.user.email);
        n
        // You can navigate to the login screen or perform any other action here
      })
      .catch((error) => {
        // Signup failed
        console.log("Signup error:", error);
        // You can show an error message to the user here
      });
  };

  return (
    <TouchableOpacity
      onPress={handleSignup} // Call the handleSignup function on button press
      style={{
        backgroundColor: activeColors.accent,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
