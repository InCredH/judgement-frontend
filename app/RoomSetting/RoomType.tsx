import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

const RoomType = () => {
  return (
    <View className="flex-1 bg-background justify-center items-center relative">
      {/* Back Button */}
      <TouchableOpacity
        className="absolute top-5 left-5 bg-btnSecondary p-3 rounded-md"
        onPress={() => {
          router.push("/");
        }}
      >
        <Text className="text-white text-lg font-bold">←</Text>
      </TouchableOpacity>

      {/* Buttons for Create Room and Join Room */}
      <View className="flex-row space-x-5">
        <Link href="/create-room" asChild>
          <TouchableOpacity className="bg-btnPrimary px-6 py-3 rounded-lg active:bg-btnClick">
            <Text className="text-textPrimary text-body font-primary">
              Create Room
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/join-room" asChild>
          <TouchableOpacity className="bg-btnPrimary px-6 py-3 rounded-lg active:bg-btnClick">
            <Text className="text-textPrimary text-body font-primary">
              Join Room
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default RoomType;
