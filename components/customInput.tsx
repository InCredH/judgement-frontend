import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface CustomInputWithLabelProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  inputWidth?: number;
  inputHeight?: number;
}

const CustomInputWithLabel: React.FC<CustomInputWithLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  inputWidth = 330,
  inputHeight = 48,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#A1A1A1"
        style={[styles.input, { width: inputWidth, height: inputHeight }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: '#1E1E2C',
    fontSize: 22,
    fontFamily: 'Bubblegum sans',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    color: '#1E1E2C',
    fontFamily: 'Quicksand',
  },
});

export default CustomInputWithLabel;
