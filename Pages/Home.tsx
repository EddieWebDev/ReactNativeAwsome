import { Button, Pressable, Text, View } from "react-native";
import { useState } from "react";

const Home = ({ navigation }: any) => {
  const OnPress = () => {};

  return (
    <View>
      <Text>Home</Text>
      <Button
        color={"#a6dbbc"}
        title="Go to Test page"
        onPress={() => navigation.navigate("Test", { name: "Testorono" })}
      />
      <Pressable
        className="bg-accent p-3 m-2 rounded-lg items-center text-white"
        onPress={() => navigation.navigate("Test", { name: "Testorono" })}
        android_ripple={{ color: "accentSecondary" }}
      >
        <Text className="uppercase text-[#ffffff] font-bold tracking-widest">
          Pressable
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;
