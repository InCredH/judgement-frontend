import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

// interface CustomButtonProps {
//   title: string;
//   onPress: () => void;
//   color?: string;
//   accessibilityLabel?: string;
//   width: number;
// }

const CustomButton = ({
  title,
  onPress,
  color = "#555555",
  accessibilityLabel,
  width,
}: {
    title: string;
  onPress: () => void;
  color?: string;
  accessibilityLabel?: string;
  width: number;
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles(width).button, { backgroundColor: color }]}
        accessibilityLabel={accessibilityLabel || title}
      >
        <Text style={styles(width).buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (width: number) =>
  StyleSheet.create({
    button: {
      width: width,

      height: 47,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 22,
      fontFamily: "Quicksand",
    },
  });

export default CustomButton;
