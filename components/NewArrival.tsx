import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewArrival() {
  return (
    <SafeAreaView>
      <View  style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <Text style={styles.head}>Today New Arivable</Text>
          <Text style={{ color: "#6B7280", paddingVertical: 4 }}>
            Best of the today food list update
          </Text>
        </View>
        <View>
            <Text  style={{ color: "#6B7280", }}>See all</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  head: {
    fontWeight: "600",
    fontSize: 18,
  },
});
