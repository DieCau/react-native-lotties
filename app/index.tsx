import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet } from "react-native";

import van from "@/assets/lotties/car.json";

export default function index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView source={van} autoPlay loop style={{ height: "100%" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  lottie: {
    width: "100%",
    height: 250,
  },
});
