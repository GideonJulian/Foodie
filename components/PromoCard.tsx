import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";

interface PromoCardProps {
  title: string;
  subtitle: string;
  logo: ImageSourcePropType;
  image: ImageSourcePropType;
  bg: string;
}

export default function PromoCard({
  title,
  subtitle,
  logo,
  image,
  bg,
}: PromoCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      {/* Left Section */}
      <View style={styles.left}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Right Section */}
      <View style={styles.right}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    height: 140,
    borderRadius: 28,
    overflow: "hidden",
    
  },
  left: {
    flex: 1,
    padding: 15,
    justifyContent: "center", // centers vertically
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  subtitle: {
    color: "white",
    textAlign: "left",
    marginTop: 6,
    width: 169,
    fontSize: 11
  },
  right: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center", 
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "100%",
  },
});