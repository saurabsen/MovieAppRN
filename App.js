import { NativeBaseProvider, Text } from "native-base";
import HomeStack from "./src/homeStack/HomeStack";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeStack />
    </NativeBaseProvider>
  );
}
