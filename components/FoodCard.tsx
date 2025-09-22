import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

type Data = {
  name: string;
  address: string;
  img: any;
};

export default function FoodCard({ name, address, img }: Data) {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        {/* Image */}
        <Image source={img} style={styles.image} resizeMode="cover" />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.addressRow}>
            <Ionicons name="location-sharp" size={14} color="#32B768" />
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 226,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    
    marginRight: 12,
    padding: 10
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    fontSize:  16
  },
  address: {
    fontSize: 15,
    color: "#6B7280",
    marginLeft: 4,
  },
});
