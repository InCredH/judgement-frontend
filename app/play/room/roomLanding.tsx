import { View } from "react-native";
import { Link, router } from "expo-router";
import CustomButton from "@/components/customButton";
import { useState } from "react";
import CustomInputWithLabel from "@/components/customInput";
import { SafeAreaView } from "react-native-safe-area-context";

const RoomLanding = () => {

  return (
    <SafeAreaView className="h-full">
      <View className="relative flex-1">
        <View className="absolute top-5">
          <CustomButton title="<<" width={48} onPress={() => router.back()} />
        </View>
        <View className="flex-1 items-center justify-center gap-12">
          <Link
            href={{ pathname: "/play/name", params: { roomSetting: "create" } }}
            asChild
          >
            <CustomButton title="Create Room" width={192} onPress={() => {}} />
          </Link>
          <Link
            href={{ pathname: "/play/name", params: { roomSetting: "join" } }}
            asChild
          >
            <CustomButton title="Join Room" width={192} onPress={() => {}} />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RoomLanding;
