import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import van from "@/assets/lotties/car.json";
import { useRef } from "react";

export default function index() {

  const carlottie = useRef<LottieView>(null);


  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView
        source={van}
        autoPlay
        loop
        ref={carlottie}
        style={styles.lottie}
      />
      <View>
        <TouchableOpacity></TouchableOpacity>        
      </View>
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
    height: 200,
  },
});
