import React, { useState } from "react";
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [roomScreen, setRoomScreen] = useState(false);
  const [howToPlay, setHowToPlay] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.title}>Judgement</Text>
        <View style={styles.buttonContainer}>
          {/* <Button
            onPress={() => setRoomScreen(true)}
            title="Play"
            color="#3E7B27"
            accessibilityLabel="Start the game"
          />
          <View style={styles.buttonSpacer} />
          <Button
            onPress={() => setHowToPlay(true)}
            title="How to Play"
            color="#841584"
            accessibilityLabel="Learn how to play"
          /> */}
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => setRoomScreen(true)}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
          {/* Spacer */}
          <View style={styles.buttonSpacer} />
          {/* How to Play Button */}
          <TouchableOpacity
            style={styles.howToPlayButton}
            onPress={() => setHowToPlay(true)}
          >
            <Text style={styles.buttonText}>How to Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#010447",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonSpacer: {
    height: 20,
  },
  playButton: {
    backgroundColor: "#28A745", // Vibrant green
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  howToPlayButton: {
    backgroundColor: "#6610F2", // Vibrant purple
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    width: "80%",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default App;
