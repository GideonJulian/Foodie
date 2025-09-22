import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function TopNav() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/icons/menu.png")}
          style={styles.menuIcon}
        />

        <View style={styles.locationWrapper}>
          <Ionicons name="location-sharp" size={22} color="#32B768" />
          <Text style={styles.locationText}>Agrabad 435, Chittagong</Text>
        </View>

        <View style={styles.userAvatar}>
          <FontAwesome5 name="user" size={18} color="black" />
        </View>
      </View>

      {/* Search */}
      <View style={styles.inputGroup}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#9CA3AF"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#999"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    width: 22,
    height: 22,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 4,
  },
  userAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup: {
    marginTop: 20,
    justifyContent: "center",
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 45,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#E6E7E9",
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
});
