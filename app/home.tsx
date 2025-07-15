import LottieView from "lottie-react-native";
import { SafeAreaView, StyleSheet } from "react-native";

import passport from '@/assets/lotties/passport.json';

export default function home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LottieView
        source={passport}
        autoPlay
        loop
        style={(styles.lottie, { height: '80%'  })}
      />
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
})  