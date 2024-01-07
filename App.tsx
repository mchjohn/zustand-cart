import { StatusBar } from 'expo-status-bar';
import { useFonts, Nunito_500Medium, Nunito_600SemiBold } from '@expo-google-fonts/nunito';


import { Navigation } from './src/navigation';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_500Medium,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Navigation />
      <StatusBar style="light" translucent />
    </>
  );
}
