import { IconSymbol } from "@/components/ui/IconSymbol";
import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import van from "@/assets/lotties/car.json";
import { useRef, useState } from "react";

export default function index() {
  const [isSwapped, setIsSwapped] = useState(false);

  const carlottie = useRef<LottieView>(null);

  function stopVan() {
    carlottie.current?.pause();
  }

  function startVan() {
    carlottie.current?.play();
  }

  function swapVan() {
    if (isSwapped) {
      carlottie.current?.play();
    } else {
      carlottie.current?.play(181, 0);
    }
    setIsSwapped(!isSwapped);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView
        source={van}
        autoPlay
        loop
        ref={carlottie}
        style={styles.lottie}
      />
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity style={styles.button} onPress={stopVan}>
          <IconSymbol name="pause" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={startVan}>
          <IconSymbol name="play" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={swapVan}>
          <IconSymbol name="repeat" size={50} color="#fff" />
        </TouchableOpacity>
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
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
