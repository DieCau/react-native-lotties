import { IconSymbol } from "@/components/ui/IconSymbol";
import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import van from "@/assets/lotties/car.json";
import { Link } from "expo-router";
import { useRef, useState } from "react";

export default function index() {
  const [isSwapped, setIsSwapped] = useState(false);

  const carlottie = useRef<LottieView>(null);

  function stopVan() {
    carlottie.current?.pause();
  }

  function startVan() {
    if (isSwapped) {
      carlottie.current?.play(0, 181);
    } else {
      carlottie.current?.play();
    }
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
      <Link href="/home" style={styles.travelButton}>
        Preparar el viaje
      </Link>
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
  travelButton: {
    backgroundColor: "#5c3f6b",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    marginHorizontal: 10,
    marginTop: "auto",
    marginBottom: 10,
  },
});
