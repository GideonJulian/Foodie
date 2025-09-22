import PromoCarousel from "@/components/PromoCarousel";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../../components/TopNav";
import NewArrival from "@/components/NewArrival";
export default function Index() {
  return (
    <SafeAreaView style={{flex: 1, }}>
      <View style={{ padding: 20 }}>
        <View >
          <TopNav />
        </View>
        <View>
          <PromoCarousel />
        </View>
        <View>
          <NewArrival />
        </View>
      </View>
    </SafeAreaView>
  );
}
