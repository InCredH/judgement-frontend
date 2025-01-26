import { View } from "react-native";
import { Link } from "expo-router";
import CustomButton from "@/components/customButton";
import { useState } from "react";
import CustomInputWithLabel from "@/components/customInput";
import { SafeAreaView } from "react-native-safe-area-context";

const RoomLanding = () => {
  const [text, setText] = useState("");
  const [roomSetting, setRoomSetting] = useState("");


  const handleInputChange = (input: string) => {
    setText(input);
  };

  return (
    <SafeAreaView className="p-5">
          <Link href="/" asChild>
            <CustomButton
              title="<<"
              width={48}
              onPress={() => console.log("back")}
            />
          </Link>
          <View className="flex-1 justify-center items-center">
            <View className="mt-32 items-center gap-20 max-w-md w-full ">
              <CustomButton
                title="Create Room"
                width={192}
                onPress={() => setRoomSetting("create")}
              />
              <CustomButton
                title="Join Room"
                width={192}
                onPress={() => setRoomSetting("join")}
              />
            </View>
          </View>
        </SafeAreaView>
  );
};

export default RoomLanding;
