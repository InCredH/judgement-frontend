import CustomButton from "@/components/customButton";
import CustomInputWithLabel from "@/components/customInput";
import CustomInput from "@/components/customInput";
import CustomText from "@/components/customText";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const RoomConfig = () => {
  const [text, setText] = useState("");
  const [roomConfig, setRoomConfig] = useState(false);

  const handleInputChange = (input: string) => {
    setText(input);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <CustomInputWithLabel
        label="No. of Players: "
        value={text}
        onChangeText={handleInputChange}
        placeholder=""
      />{" "}
      <CustomInputWithLabel
        label="No. of Rounds: "
        value={text}
        onChangeText={handleInputChange}
        placeholder=""
      />
      <Link href="/play/room/waitingRoom">
        <CustomButton
          title="Save"
          width={91}
          onPress={() => console.log("save")}
        />
      </Link>
    </View>
  );
};

export default RoomConfig;
