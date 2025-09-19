import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
import Feather from "@expo/vector-icons/Feather";
type Slide = { id: string; title: string; image: any; description: string };

const slides: Slide[] = [
  {
    id: "1",
    image: require("../assets/images/onboarding/map.png"),
    title: "Nearby restaurants",
    description:
      "You don't have to go far to find a good restaurant, we have provided all the restaurants that are near you",
  },
  {
    id: "2",
    image: require("../assets/images/onboarding/watch.png"),
    title: "Select the Favorites Menu",
    description:
      "Now eat well, don't leave the house, you can choose your favorite food only with one click",
  },
  {
    id: "3",
    image: require("../assets/images/onboarding/safefood.png"),
    title: "Good food at a cheap price",
    description: "You can eat at expensive restaurants with affordable price",
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<Slide>>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      router.replace("/register");
    }
  };

  const handleSkip = () => {
    router.replace("/register");
  };

  const onMomentum = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    console.log("offsetX:", offsetX, "=> index:", index);
    setCurrentIndex(index);
  };

  const getItemLayout = (_: Slide[] | null, index: number) => ({
    length: width,
    offset: width * index,
    index,
  });

  const renderItem = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* FlatList */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={onMomentum}
        getItemLayout={getItemLayout}
        snapToInterval={width}
        decelerationRate="fast"
        scrollEnabled={false}
      />

      {/* Footer */}
      <View style={styles.footer}>
        {/* Skip */}
        {currentIndex < slides.length - 1 ? (
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 50 }} />
        )}

        {/* Dots */}
        <View style={styles.dotsContainer}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, currentIndex === i && styles.activeDot]}
            />
          ))}
        </View>

        {/* Next / Done */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text
            style={[
              styles.nextText,
              currentIndex === slides.length - 1 && styles.done,
            ]}
          >
            {currentIndex === slides.length - 1 ? (
              "Done"
            ) : (
              <Feather name="arrow-right" size={24} color="#01974f" />
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  slide: {
    width, // must equal screen width
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: width * 0.7,
    height: height * 0.4,
    resizeMode: "contain",
    marginTop: 90,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  description: { fontSize: 15, color: "#666", textAlign: "center" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  dotsContainer: { flexDirection: "row", alignItems: "center" },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#01974f",
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  skipText: { color: "#01974f", fontSize: 16 },
  nextButton: {
    // backgroundColor: "#01974f",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },
  nextText: { color: "#fff", fontWeight: "700" },
  done: {
     backgroundColor: "#01974f",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  }
});
