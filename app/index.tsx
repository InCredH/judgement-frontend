import React from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import CustomButton from "@/components/customButton";

const App = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-1">
        <StatusBar hidden={true} />
        <View className="flex-1 justify-center items-center w-full">
          <View className="mb-16">
            <Text className="text-7xl font-primary -mb-4">JUDGEMENT</Text>
            <Text className="text-2xl font-primary pl-44">
              How good is your prediction?
            </Text>
          </View>

            <View className="flex-row gap-2 sm:gap-10 md:gap-20">
              <Link href="/play/room/roomLanding" asChild>
                <CustomButton
                  title="Play"
                  width = {192}
                  onPress={() => console.log("Learn More Pressed")}
                />
              </Link>

              <Link href="/howToPlay" asChild>
                <CustomButton
                  title="How to Play"
                  width = {192}
                  onPress={() => console.log("Learn More Pressed")}
                />
              </Link>
            </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
