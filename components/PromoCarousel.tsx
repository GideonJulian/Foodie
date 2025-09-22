import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import PromoCard from "../components/PromoCard";

type Data = {
  id: number;
  title: string;
  subtitle: string;
  logo: any;
  image: any;
  bg: string;
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8; // card takes 80% of screen
const SPACING = 15;

const data: Data[] = [
  {
    id: 1,
    title: "Flash Offer",
    subtitle: "We are here with the best deserts in town.",
    logo: require("../assets/images/starbucks-logo.png"),
    image: require("../assets/images/burgers.png"),
    bg: "#FFA94D",
  },
  {
    id: 2,
    title: "Pizza Deal",
    subtitle: "Grab your cheesy bites now!",
    logo: require("../assets/images/starbucks-logo.png"),
    image: require("../assets/images/rice.png"),
    bg: "#FF6B6B",
  },
  {
    id: 3,
    title: "Coffee Time",
    subtitle: "Hot coffee, special price today ☕",
    logo: require("../assets/images/starbucks-logo.png"),
    image: require("../assets/images/promoImg.png"),
    bg: "#6C5CE7",
  },
];

export default function PromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({ item }: { item: Data }) => (
    <View style={{ width: CARD_WIDTH, marginHorizontal: SPACING / 2 }}>
      <PromoCard {...item} />
    </View>
  );

  const renderPaginationDots = () => (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index === currentIndex ? "#32B768" : "#E0E0E0",
            },
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        width={CARD_WIDTH + SPACING}
        height={140}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={300}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={renderItem}
        style={styles.carousel}
      />
      {renderPaginationDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
  },
  carousel: {
    width: width,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
});