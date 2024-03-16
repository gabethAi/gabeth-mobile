import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, YStack, XStack, Paragraph, Image, View, H6 } from "tamagui";
import { RootStackList } from "../../types";

const OnboardingScreen = ({
  navigation,
}: {
  navigation: NativeStackScreenProps<
    RootStackList,
    "OnboardingScreen"
  >["navigation"];
}) => {
  return (
    <View paddingTop='$14' paddingHorizontal='$4'>
      <YStack gap='$6'>
        <View alignSelf='center'>
          <Image
            className='rounded-md'
            source={{
              width: 350,
              height: 350,
              uri: "https://s3-alpha-sig.figma.com/img/0be2/6e97/e390a6954d57fe36974b7cc4af8066c4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AH6lXMg3L4M1BBORSm7Qvz5iK4Ikgmlr14o-Ks4VGHKGkRybG~cy~NGJGK3iNcVpRT91g~i6qfzdoDawQslb0Iju7eHqKjI6HE9evZ2wZk0JBjr7g8oiQprWhf6H746i44Q8tmlykmzd61FG9TdPsTmIkB0qeD1RyylzYO7trpyylDweQ3gB2~d194cvRFYb-6nVdoNzqQj3gMtUi3Wq0lT0IAs6TGpNyAaqwVv8x8-VVCRMoFlGe10wAYXXSbjWdaRjXtYLO-XEfWg2V6lVyWcMR0rGStV1pKko4rQfnZUMvN7SAfY26viMo8BoqvX~rH-8creUHjyQ8gGazrMBog__",
            }}
          />
        </View>

        <YStack gap='$3'>
          <Button variant='outlined'>Sign up with Google</Button>
          <Button variant='outlined'>Sign up with Apple</Button>
          <Button variant='outlined'>Sign up with Email</Button>
        </YStack>

        <YStack alignSelf='center'>
          <XStack gap='$4' alignItems='center'>
            <Paragraph>Already have an account?</Paragraph>
            <Button onPress={() => navigation.navigate("ChatScreen")}>
              Log in
            </Button>
          </XStack>
        </YStack>
      </YStack>
    </View>
  );
};

export default OnboardingScreen;
