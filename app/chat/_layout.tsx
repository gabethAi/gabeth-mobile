import { Link, Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Platform } from "react-native";
import DrawerContent from "@/components/shared/DrawerContent";

export default function ChatLayout() {
  if (Platform.OS === "web") {
    // Use a basic custom layout on web.
    return (
      <div style={{ flex: 1 }}>
        <header>
          <Link href='/'>Home</Link>
        </header>
        <Slot />
      </div>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          initialRouteName='index'
          drawerContent={(props) => {
            return <DrawerContent {...props} />;
          }}>
          <Drawer.Screen
            name='index'
            options={{
              headerShown: false,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
