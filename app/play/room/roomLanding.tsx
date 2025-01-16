import { View } from "react-native";
import { Link } from "expo-router";
import CustomButton from "@/components/customButton";
import { useState } from "react";
import CustomInputWithLabel from "@/components/customInput";

const RoomLanding = () => {
  const [roomSetting, setRoomSetting] = useState("");
  const [text, setText] = useState("");
  const [roomConfig, setRoomConfig] = useState(false);

  const handleInputChange = (input: string) => {
    setText(input);
  };

  return (
    <View>
      {roomSetting === "create" || roomSetting === "join" ? (
        <View className="flex-1 justify-center items-center">
          <View className="w-full max-w-md px-14">
            <CustomInputWithLabel
              label="Enter your name: "
              value={text}
              onChangeText={handleInputChange}
              placeholder="Enter your username"
            />

            {roomSetting === "create" ? (
              <Link href="/play/room/create/roomConfig" asChild>
                <CustomButton
                  title="Next"
                  width={91}
                  onPress={() => setRoomConfig(true)}
                />
              </Link>
            ) : roomSetting === "join" ? (
              <Link href="/play/room/join/roomId" asChild>
                <CustomButton
                  title="Next"
                  width={91}
                  onPress={() => setRoomConfig(true)}
                />
              </Link>
            ) : (
              ""
            )}
          </View>
        </View>
      ) : (
        <View className="">
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
        </View>
      )}
    </View>
  );
};

export default RoomLanding;
