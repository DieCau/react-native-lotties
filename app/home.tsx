import astronaut from "@/assets/lotties/astronaut.json";
import passport from "@/assets/lotties/passport.json";
import LottieView from "lottie-react-native";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function home() {
  const [isTraveling, setIsTraveling] = useState(false);

  function startTravel() {
    setIsTraveling(true);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView
        source={isTraveling ? astronaut : passport}
        autoPlay
        loop={isTraveling}
        style={(styles.lottie, { height: isTraveling ? "100%" : "80%" })}
      />
      {!isTraveling && (
        <TouchableOpacity style={styles.travelButton} onPress={startTravel}>
          <Text>Iniciar Viaje</Text>
        </TouchableOpacity>
      )}
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
  },
  travelButton: {
    width: "100%",
    backgroundColor: "#057fc5ff",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
});
