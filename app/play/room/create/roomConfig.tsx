import CustomButton from "@/components/customButton";
import CustomInputWithLabel from "@/components/customInput";
import CustomInput from "@/components/customInput";
import CustomText from "@/components/customText";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RoomConfig = () => {
  const [text, setText] = useState("");
  const [roomConfig, setRoomConfig] = useState(false);

  const handleInputChange = (input: string) => {
    setText(input);
  };

  return (
    <SafeAreaView className="h-full">
      <View className="relative flex-1 justify-center items-center">
        <View className="absolute left-0 top-5">
          <CustomButton title="<<" width={48} onPress={() => router.back()} />
        </View>
        <CustomInputWithLabel
          label="No. of Players: "
          value={text}
          onChangeText={handleInputChange}
          placeholder="exact number of players"
        />
        <CustomInputWithLabel
          label="No. of Rounds: "
          value={text}
          onChangeText={handleInputChange}
          placeholder="total rounds"
        />
        <View className="absolute bottom-5 right-5">
          <Link href="/play/room/waitingRoom">
            <CustomButton
              title="Save"
              width={91}
              onPress={() => console.log("save")}
            />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RoomConfig;
