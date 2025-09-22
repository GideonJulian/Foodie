import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodCard from "./FoodCard";

const { width } = Dimensions.get("window");
const SPACING = 6;
const CARD_WIDTH = (width - SPACING ) / 2; // correct calculation

type Data = {
  name: string;
  address: string;
  img: any;
};

export default function NewArrival() {
  const data: Data[] = [
    {
      name: "Chicken Biryani",
      address: "Ambrosia Hotel & Restaurant",
      img: require("../assets/images/rice.png"),
    },
    {
      name: "Sauce Tonkatsu ",
      address: "Handi Restaurant, Chittagong ",
      img: require("../assets/images/promoImg.png"),
    },
    {
      name: "Veggie Pizza",
      address: "Urban Kitchen",
      img: require("../assets/images/promoImg.png"),
    },
    {
      name: "Pasta Alfredo",
      address: "Italian Bistro",
      img: require("../assets/images/promoImg.png"),
    },
  ];

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.head}>Today New Arrival</Text>
          <Text style={styles.sub}>Best of the today food list update</Text>
        </View>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* Smooth Scrollable List */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH, marginHorizontal: SPACING / 1 }}>
            <FoodCard {...item} />
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    fontWeight: "600",
    fontSize: 18,
  },
  sub: {
    color: "#6B7280",
    paddingVertical: 4,
  },
  seeAll: {
    color: "#6B7280",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
