import { Tabs } from "expo-router";
import { Image, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerShadowVisible: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 0,
          // iOS shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.4,
          shadowRadius: 10,

          elevation: 10,
          overflow: "hidden",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
        },
        tabBarIconStyle: {
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
        
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 32, height: 32 }}>
              <Image
                source={
                  focused
                    ? require("../../assets/icons/home-active.png")
                    : require("../../assets/icons/home.png")
                }
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
                
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 32, height: 32 }}>
              <Image
                source={
                  focused
                    ? require("../../assets/icons/history-active.png")
                    : require("../../assets/icons/history.png")
                }
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 32, height: 32 }}>
              <Image
                source={
                  focused
                    ? require("../../assets/icons/profile-active.png")
                    : require("../../assets/icons/profile.png")
                }
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
