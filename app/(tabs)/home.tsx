import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../../components/TopNav";
export default function Index() {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <TopNav />
        </View>
        <Text>Home page</Text>
      </View>
    </SafeAreaView>
  );
}
