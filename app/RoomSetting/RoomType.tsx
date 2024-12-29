import { Link } from "expo-router";
import { Button, View } from "react-native";

const roomType = () => {
    return (
        <View className="items-center">
        <Button
          onPress={() => {
            // setRoomScreen(false);
          }}
          title="back"
          color="#3E7B27"
          accessibilityLabel="To play the game"
        />
        <Link href="/" className="text-[40px] ">
          Create Room
        </Link>
        <Link href="/" className="text-[40px]">
          Join room
        </Link>{" "}
      </View>
    )
}

export default roomType;