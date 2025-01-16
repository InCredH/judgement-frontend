import CustomButton from "@/components/customButton";
import CustomInputWithLabel from "@/components/customInput";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const RoomId = () => {
  const [text, setText] = useState("");

  const handleInputChange = (input: string) => {
    setText(input);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <CustomInputWithLabel
        label="Enter Room Id: "
        value={text}
        onChangeText={handleInputChange}
        placeholder="Enter your username"
      />

      <Link href="/play/room/waitingRoom">
        <CustomButton
          title="Enter"
          width={91}
          onPress={() => console.log("save")}
        />
      </Link>
    </View>
  );
};

export default RoomId;
