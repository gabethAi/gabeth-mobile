import React, { useState } from "react";
import {
  Pressable,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";

import {
  Button,
  Form,
  Paragraph,
  ScrollView,
  Text,
  TextArea,
  View,
  H1,
  XStack,
  YStack,
  Sheet,
  SheetProps,
} from "tamagui";
import AiSvgComponent from "../AiSvgComponent";

const suggestionsPrompts = [
  {
    heading: "come up with 5 concepts for a retro-style arcade game.",
    message: "Come up with 5 concepts for a retro-style arcade game.",
  },
  {
    heading: "Explain technical concepts",
    message: `Explain a random technical concept`,
  },
  {
    heading: "Summarize an article",
    message: "Summarize a random article",
  },
  {
    heading: "Draft an email",
    message: `Draft a random email`,
  },
  {
    heading: "Write a blog post",
    message: `Write a random blog post`,
  },
];

const ChatScreen = () => {
  const insets = useSafeAreaInsets();
  const [showExpandedSheet, setshowExpandedSheet] = useState(false);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(true);
  const [innerOpen, setInnerOpen] = useState(false);

  const openDrawer = () => {
    console.log("open drawer");
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
        className='bg-primary relative'>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}>
          <View
            height={"100%"}
            paddingHorizontal='$3.5'
            paddingVertical='$2'
            justifyContent='space-between'>
            <XStack justifyContent='space-between' alignItems='center'>
              <Pressable onPress={(e) => openDrawer()}>
                <Feather name='menu' size={24} color='black' />
              </Pressable>
              <Button variant='outlined'>
                Upgrade to
                <View
                  backgroundColor={"$green10"}
                  padding='$1.5'
                  borderRadius={"$2"}>
                  <Text color={"white"}> Pro</Text>
                </View>
              </Button>
              <Feather name='edit' size={24} color='black' />
            </XStack>

            <YStack rowGap='$2.5' paddingHorizontal='$3.5'>
              <View alignItems='center' paddingBottom='$2'>
                <AiSvgComponent />
              </View>
              <H1 textAlign='center'>Hello there</H1>
              <Paragraph textAlign='center'>
                How may I be of assistance? You can ask me a question, or pick a
                suggestion.
              </Paragraph>
            </YStack>

            <View className=''>
              <YStack rowGap='$3'>
                <ScrollView horizontal width={"100%"}>
                  <XStack columnGap='$2.5' overflow='unset'>
                    {suggestionsPrompts.map((prompt) => (
                      <Button
                        key={prompt.heading}
                        variant='outlined'
                        size='$4'
                        width={200}>
                        {prompt.heading}
                      </Button>
                    ))}
                  </XStack>
                </ScrollView>
                <Form
                  onSubmit={() => {
                    console.log("submitting");
                    // handleSubmit();
                  }}>
                  <XStack
                    width={"100%"}
                    columnGap='$2'
                    className='relative'
                    alignItems='stretch'>
                    <TextArea
                      maxHeight={150}
                      // onChange={handleInputChange}
                      borderWidth={2}
                      onContentSizeChange={(e) => {
                        const height = e.nativeEvent.contentSize.height;

                        if (height > 50) {
                          setshowExpandedSheet(true);
                        } else {
                          setshowExpandedSheet(false);
                        }
                      }}
                      width={"90%"}
                      placeholder='Ask me anything...'
                    />
                    <View
                      width={"10%"}
                      justifyContent={
                        showExpandedSheet ? "space-between" : "center"
                      }
                      alignItems='center'>
                      {showExpandedSheet && (
                        <Pressable
                          style={{
                            padding: 4,
                          }}
                          onPress={() => setOpen(!open)}>
                          <MaterialCommunityIcons
                            name='arrow-expand'
                            size={24}
                            color='black'
                          />
                        </Pressable>
                      )}
                      <Form.Trigger asChild>
                        <View
                          backgroundColor={"black"}
                          // borderRadius={"100%"}
                          alignItems='center'
                          padding='$1.5'
                          justifyContent='center'>
                          <AntDesign name='arrowup' size={20} color='white' />
                        </View>
                      </Form.Trigger>
                    </View>
                  </XStack>
                </Form>
              </YStack>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>

      <Sheet
        open={open}
        dismissOnSnapToBottom
        animation={"medium"}
        snapPoints={[85, 50]}>
        <Sheet.Overlay
          animation={"lazy"}
          enterStyle={{
            opacity: 0,
          }}
          exitStyle={{
            opacity: 0,
          }}
        />
        <Sheet.Handle />
        <Sheet.Frame padding='4' backgroundColor={"$red10"}>
          <SheetContent />
        </Sheet.Frame>
      </Sheet>
    </>
  );
};

function SheetContent(props: SheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Form
        backgroundColor={"$green10"}
        maxHeight={"100%"}
        onSubmit={() => {
          console.log("submitting");
          // handleSubmit();
        }}>
        <TextInput
          editable
          placeholder='Ask me anything...'
          // autoFocus
          multiline
          numberOfLines={4}
          maxLength={40}
          style={{
            padding: 10,
          }}
        />
        <View className='' alignItems='flex-end'>
          <Form.Trigger asChild>
            <View
              backgroundColor={"black"}
              // borderRadius={"100%"}
              alignItems='center'
              padding='$1.5'
              justifyContent='center'>
              <AntDesign name='arrowup' size={20} color='white' />
            </View>
          </Form.Trigger>
        </View>
      </Form>
    </KeyboardAvoidingView>
  );
}

export default ChatScreen;
