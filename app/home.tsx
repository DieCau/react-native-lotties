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
        loop={false}
        style={(styles.lottie, { height: isTraveling ? "100%" : "80%" })}
      />
      <TouchableOpacity
        style={styles.travelButton}
        onPress={startTravel}
      >
        <Text>
          Iniciar Viaje
        </Text>
      </TouchableOpacity>
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
  travelButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,    
  },     
})  