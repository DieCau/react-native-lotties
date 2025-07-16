import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

import astronaut from '@/assets/lotties/astronaut.json';
import passport from '@/assets/lotties/passport.json';
import { useState } from "react";

export default function home() {

  function startTravel() {
    setIsTraveling(true)
  }

  const [isTraveling, setIsTraveling] = useState(false)


  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView
        source={isTraveling ? astronaut : passport}
        autoPlay
        loop={isTraveling}
        style={(styles.lottie, { height: isTraveling ? "100%" : "80%" })}
      />
      { isTraveling && 
      <TouchableOpacity
        style={styles.travelButton}
        onPress={startTravel}
      >
        <Text>
          Iniciar Viaje
        </Text>
      </TouchableOpacity>
      }
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
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },     
})  