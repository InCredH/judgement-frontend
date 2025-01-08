// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   StatusBar,
//   TouchableOpacity,
// } from "react-native";
// import judgmentBg from "../assets/images/judgment.webp";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Link } from "expo-router";

// const App = () => {
//   const [roomScreen, setRoomScreen] = useState(false);
//   const [howToPlay, setHowToPlay] = useState(false);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar hidden={true} />
//       <View style={styles.container}>
//         <Text style={styles.title}>Judgement</Text>
//         <View style={styles.buttonContainer}>
//           {/* <Button
//             onPress={() => setRoomScreen(true)}
//             title="Play"
//             color="#3E7B27"
//             accessibilityLabel="Start the game"
//           />
//           <View style={styles.buttonSpacer} />
//           <Button
//             onPress={() => setHowToPlay(true)}
//             title="How to Play"
//             color="#841584"
//             accessibilityLabel="Learn how to play"
//           /> */}
//           <TouchableOpacity
//             style={styles.playButton}
//             onPress={() => setRoomScreen(true)}
//           >
//             <Link href={"/RoomSetting/RoomSetting"}>
//               <Text style={styles.buttonText}>Play</Text>
//             </Link>
//           </TouchableOpacity>
//           {/* Spacer */}
//           <View style={styles.buttonSpacer} />
//           {/* How to Play Button */}
//           <TouchableOpacity
//             style={styles.howToPlayButton}
//             onPress={() => setHowToPlay(true)}
//           >
//             <Text style={styles.buttonText}>How to Play</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#010447",
//     backgroundImage: judgmentBg,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 50,
//     fontWeight: "bold",
//     color: "white",
//     marginBottom: 30,
//   },
//   buttonContainer: {
//     alignItems: "center",
//   },
//   buttonSpacer: {
//     height: 20,
//   },
//   playButton: {
//     backgroundColor: "#28A745", // Vibrant green
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     shadowColor: "rgba(0, 0, 0, 0.8)",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     elevation: 10,
//     width: "80%",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   howToPlayButton: {
//     backgroundColor: "#6610F2", // Vibrant purple
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     shadowColor: "rgba(0, 0, 0, 0.8)",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     elevation: 10,
//     width: "80%",
//     alignItems: "center",
//   },

//   buttonText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//     textTransform: "uppercase",
//     letterSpacing: 1,
//   },
// });

// export default App;

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   ImageBackground,
//   Text,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Link } from "expo-router";
// import judgmentBg from "../assets/images/judgement2.webp"; // Ensure correct path
// import TypeWriter from "react-native-typewriter";

// const App = () => {
//   return (
//     <View style={styles.backgroundContainer}>
//       <StatusBar hidden={true} />
//       {/* Background Image */}
//       {/* <ImageBackground
//         source={judgmentBg}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       > */}
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.container}>
//           {/* Title with Typewriter Effect */}
//           <TypeWriter
//             style={styles.title}
//             typing={1} // Typing state: 1 for typing, 0 for stopped
//             minDelay={50} // Delay between characters
//             maxDelay={100} // Maximum delay between characters
//           >
//             Judgement
//           </TypeWriter>

//           <View style={styles.buttonContainer}>
//             {/* Play Button */}
//             <Link href="/RoomSetting/RoomType" asChild>
//               <TouchableOpacity style={styles.playButton}>
//                 <Text style={styles.buttonText}>Play</Text>
//               </TouchableOpacity>
//             </Link>

//             {/* Spacer */}
//             <View style={styles.buttonSpacer} />

//             {/* How to Play Button */}
//             <Link href="/RoomSetting/RoomSetting" asChild>
//               <TouchableOpacity style={styles.howToPlayButton}>
//                 <Text style={styles.buttonText}>How to Play</Text>
//               </TouchableOpacity>
//             </Link>
//           </View>
//         </View>
//       </SafeAreaView>
//       {/* </ImageBackground> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundContainer: {
//     flex: 1,
//     backgroundColor: "#090959", // Ensures full-screen background
//   },
//   backgroundImage: {
//     flex: 1, // Ensures it fills the whole screen
//     width: "100%",
//     height: "100%",
//   },
//   safeArea: {
//     flex: 1, // Ensures content fills available space
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//   },
//   title: {
//     fontSize: 80,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 30,

//     // First shadow (1px 1px 2px red)
//     textShadowColor: "red",
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,

//     // Second shadow (0 0 1em blue)
//     // shadowColor: "blue", // Use shadowColor for outer glow
//     // shadowOffset: { width: 0, height: 0 },
//     // shadowOpacity: 0.9, // Make it more visible
//     // shadowRadius: 16, // 1em = ~16px

//     // Required for Android
//     elevation: 10, // Adds more visibility to the shadow
//   },
//   buttonContainer: {
//     alignItems: "center",
//     width: "60%",
//   },
//   buttonSpacer: {
//     height: 20,
//   },
//   playButton: {
//     backgroundColor: "#28A745", // Vibrant green
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     shadowColor: "rgba(0, 0, 0, 0.8)",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     elevation: 10,
//     width: "50%",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   howToPlayButton: {
//     backgroundColor: "#6610F2", // Vibrant purple
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 30,
//     shadowColor: "rgba(0, 0, 0, 0.8)",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.8,
//     shadowRadius: 10,
//     elevation: 10,
//     width: "50%",
//     alignItems: "center",
//   },
//   buttonText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "white",
//     textTransform: "uppercase",
//     letterSpacing: 1,
//   },
// });

// export default App;

import React from "react";
import { View, StatusBar, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
// import TypeWriter from "react-native-typewriter";

const App = () => {
  return (
    <View className="flex-1 bg-[#090959]">
      {" "}
      {/* Full-screen background */}
      <StatusBar hidden={true} />
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center items-center w-full">
          {/* Title with Typewriter Effect */}
          {/* <TypeWriter
            className="text-heading text-textPrimary mb-8 text-shadow-lg"
            typing={1} // Typing state: 1 for typing, 0 for stopped
            minDelay={50} // Delay between characters
            maxDelay={100} // Maximum delay between characters
          > */}
          <Text>Judgement</Text>
          {/* </TypeWriter> */}

          <View className="items-center w-3/5">
            {/* Play Button */}
            <Link href="/RoomSetting/RoomType" asChild>
              <TouchableOpacity className="bg-[#28A745] py-3 px-5 rounded-2xl shadow-lg w-1/2 items-center mb-5 active:bg-btnClick">
                <Text className="text-white font-special uppercase tracking-widest">
                  Play
                </Text>
              </TouchableOpacity>
            </Link>

            {/* How to Play Button */}
            <Link href="/RoomSetting/RoomSetting" asChild>
              <TouchableOpacity className="bg-[#6610F2] py-3 px-5 rounded-2xl shadow-lg w-1/2 items-center active:bg-btnClick">
                <Text className="text-white font-special uppercase tracking-widest">
                  How to Play
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
