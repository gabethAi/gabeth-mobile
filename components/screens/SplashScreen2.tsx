import React from "react";
import { H1, H6, Button, View, XStack } from "tamagui";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackList } from "../../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SplashScreen2 = ({
  navigation,
}: {
  navigation: NativeStackScreenProps<
    RootStackList,
    "SplashScreen2"
  >["navigation"];
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className='relative'
      style={{
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View className='absolute top-40'>
        <View className='space-y-2'>
          <H1>Language and Context Understanding</H1>
          <H6>
            Speak Naturally: Our AI understands your words and context, making
            conversations feel natural and intuitive.
          </H6>
        </View>

        <XStack columnGap='$8' marginTop='$10'>
          <Button
            variant='outlined'
            width={200}
            onPress={() => navigation.goBack()}>
            Previous
          </Button>
          <Button
            variant='outlined'
            width={200}
            onPress={() => navigation.navigate("OnboardingScreen")}>
            Get Started
          </Button>
        </XStack>
      </View>
    </View>
  );
};

export default SplashScreen2;
