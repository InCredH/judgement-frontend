import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import { Client } from "@stomp/stompjs";
import "../global.css";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [roomScreen, setRoomScreen] = useState(false);
  const [howToPlay, setHowToPlay] = useState(false);

  return (
    
    <SafeAreaView className="items-center bg-background h-full">
      <View>
        <Text className="text-[50px] font-primary text-primary">Game title</Text>
        <View className="items-center">
          <Button
            onPress={() => {
              setRoomScreen(true);
            }}
            title="Play"
            color="#3E7B27"
            accessibilityLabel="To play the game"
          />
          <Button
            onPress={() => {
              setHowToPlay(true);
            }}
            title="How to Play"
            color="#841584"
            accessibilityLabel="To play the game"
          />

          {/* <Link href="/Play" className="text-[40px] ">
            Play
          </Link>
          <Link href="/Play" className="text-[40px]">
            How to Play
          </Link> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  status: {
    fontSize: 16,
    color: "green",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  message: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  messagesList: {
    marginTop: 20,
  },
});

export default App;
