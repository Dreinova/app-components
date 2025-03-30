import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ headerShown: false }} />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
