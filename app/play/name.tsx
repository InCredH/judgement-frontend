import CustomButton from "@/components/customButton";
import CustomInputWithLabel from "@/components/customInput";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Name = () => {
  const [roomSetting, setRoomSetting] = useState("");
  const [text, setText] = useState("");
  const [roomConfig, setRoomConfig] = useState(false);

  const handleInputChange = (input: string) => {
    setText(input);
  };

  return (
    <SafeAreaView className="h-full py-5">
      <View className="h-full flex justify-between">
        {/* //Back Button */}
        <View className="">
          <Link href="/" asChild>
            <CustomButton
              title="<<"
              width={48}
              onPress={() => console.log("back")}
            />
          </Link>
        </View>
        {/* Input  */}
        <View className=" items-center">
          <CustomInputWithLabel
            label="Enter your name: "
            value={text}
            onChangeText={handleInputChange}
            placeholder="Enter your username"
          />
        </View>

        {/* next button  */}
        <View className=" self-end">
          <Link  href="/play/room/create/roomConfig" asChild>
            <CustomButton
              title="Next"
              width={91}
              onPress={() => setRoomConfig(true)}
            />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Name;
