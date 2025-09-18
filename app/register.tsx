import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Register() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"register" | "login">("register");

  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.slide}>
        <Image
          source={require("../assets/images/onboarding/success.png")}
          style={styles.image}
        />
        <View style={{ marginTop: 40 }}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.description}>
            Before enjoying Foodmedia services Please register first
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => {
              setActiveTab("register");
              setModalVisible(true);
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Create Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              setActiveTab("login");
              setModalVisible(true);
            }}
          >
            <Text
              style={{
                color: "#32B768",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            color: "#242323",
            fontSize: 13,
          }}
        >
          By logging in or registering, you have agreed to the Terms and
          Conditions and Privacy Policy.
        </Text>
      </View>

      {/* Modal (Bottom Sheet) */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Dark Background */}
        <Pressable
          style={styles.backdrop}
          onPress={() => setModalVisible(false)}
        />

        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => setActiveTab("register")}
              style={[styles.tab, activeTab === "register" && styles.activeTab]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "register" && styles.activeTabText,
                ]}
              >
                Create Account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab("login")}
              style={[styles.tab, activeTab === "login" && styles.activeTab]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "login" && styles.activeTabText,
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {activeTab === "register" && (
              <>
                {/* Full Name */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Full Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#999"
                  />
                </View>
              </>
            )}

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Eg. namaemail@emailkamu.com"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#999"
              />
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#999"
              />
            </View>

            {/* Submit button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {activeTab === "register" ? "Register" : "Login"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  image: {
    resizeMode: "contain",
    marginTop: 50,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  description: { fontSize: 15, color: "#666", textAlign: "center" },
  buttonContainer: {
    marginTop: 50,
  },
  createButton: {
    backgroundColor: "#32B768",
    paddingHorizontal: 70,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 70,
    paddingVertical: 20,
    borderRadius: 15,
  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  bottomSheet: {
    height: height * 0.7,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  // Tabs
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    paddingBottom: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#32B768",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#666",
  },
  activeTabText: {
    color: "#32B768",
    fontWeight: "700",
  },

  // Form
  form: {
    marginTop: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#32B768",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
