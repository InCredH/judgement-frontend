import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface CustomTextProps {
  content: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  style?: object;
}

const CustomText: React.FC<CustomTextProps> = ({
  content,
  fontSize = 20,
  color = '#1E1E2C',
  fontFamily = 'BubblegumSans',
  style,
}) => {
  return (
    <Text
      style={[
        styles.text,
        { fontSize, color, fontFamily },
        style,
      ]}
    >
      {content}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default CustomText;
