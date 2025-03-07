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
import axios from "axios";

const Name = () => {
  const [name, setName] = useState("");
  const [roomConfig, setRoomConfig] = useState(false);

  const handleInputChange = (input: string) => {
    setName(input);
  };

  const createPlayer = () => {
    // TODO: check and show if name is not empty

    axios
      .post("http://192.168.29.169:8080/api/player/create", {
        username: name,
        isRoomOwner: roomSetting === "create" ? true : false,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
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
            value={name}
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
              onPress={() => {
                createPlayer();
              }}
            />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Name;
