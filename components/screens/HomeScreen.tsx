import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackList } from "../../types";
import { View, Button } from "tamagui";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      height={"100%"}>
      <Link href={"/chat/"}>
        Go to about Screen
        {/* <Button variant='outlined'></Button> */}
      </Link>
    </View>
  );
}

export default Home;
