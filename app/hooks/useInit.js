import React , { useEffect } from "react"
import { LogBox, Appearance } from 'react-native'
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler'

LogBox.ignoreAllLogs()


export default useInit = (setIsDark) => {

  const init = async () => {
    console.log(Appearance.getColorScheme());
    setIsDark(Appearance.getColorScheme())
  }

  let [ fontsLoaded ] = useFonts({
    'Tajawal-Medium': require('./../assets/fonts/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('./../assets/fonts/Tajawal-Bold.ttf'),
  });

  return { init, fontsLoaded }
};
