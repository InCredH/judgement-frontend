import CustomButton from "@/components/customButton";
import CustomInputWithLabel from "@/components/customInput";
import {
  Link,
  RelativePathString,
  router,
  useLocalSearchParams,
} from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Name = () => {
  const [text, setText] = useState("");
  const [roomConfig, setRoomConfig] = useState(false);

  const handleInputChange = (input: string) => {
    setText(input);
  };

  const { roomSetting } = useLocalSearchParams();

  return (
    <SafeAreaView className="h-full py-5">
      <View className="h-full flex justify-between">
        {/* //Back Button */}
        <View className="">
          <CustomButton title="<<" width={48} onPress={() => router.back()} />
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
        <View className="mr-5 self-end">
          <Link
            href={
              `/play/room/${roomSetting}/${
                roomSetting == "create" ? "roomConfig" : "roomId"
              }` as RelativePathString
            }
            asChild
          >
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
