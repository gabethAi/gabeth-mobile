import React from "react";
import { H1, H6, Button, View } from "tamagui";

const SplashScreen1 = ({ navigation }) => {
  return (
    <View className='relative'>
      <View className='absolute top-40'>
        <View className='space-y-2'>
          <H1>Chat more than human? Perhaps</H1>
          <H6>Experience an exceptional conversation with Gabeth AI chat.</H6>
        </View>

        <View className='flex justify-end items-end pt-10'>
          <Button
            variant='outlined'
            width={200}
            onPress={() => navigation.navigate("SplashScreen2")}>
            Get Started
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen1;
