import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={require("../assets/icons/menu.png")}
          style={{ width: 22, height: 22 }}
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Ionicons name="location-sharp" size={22} color="#32B768" />
          <Text>Agrabad 435, Chittagong</Text>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 25,
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="user" size={24} color="black" />
        </View>
      </View>
      <View>
        <View style={styles.inputGroup}>
            <View style={{position: 'absolute', top: 30, left: 55}}>
                <Ionicons name="search-outline" size={24} color="#9CA3AF" />
            </View>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            // value={name}
            // onChangeText={setName}
            placeholderTextColor="#999"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 0,
    borderColor: "none",
    outline: "none",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#E6E7E9",
    paddingLeft: 50,
    marginTop: 20,
    width: 280,
  },
});
