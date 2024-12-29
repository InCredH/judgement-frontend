import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const RoomSetting = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View>
      <View className="items-center">
        <Text className="text-[20px]">Entere Your Name </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RoomSetting;
