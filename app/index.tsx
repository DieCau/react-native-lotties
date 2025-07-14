import LottieView from 'lottie-react-native'; // Ensure you have this package installed
import { SafeAreaView } from "react-native";

import car from '../assets/lotties/car.json';

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView        
        source={car}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </SafeAreaView>
  )
}
