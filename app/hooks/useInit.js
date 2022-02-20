import React , { useEffect } from "react"
import { LogBox } from 'react-native'
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler'

LogBox.ignoreAllLogs()


export default useInit = () => {

  const init = async () => {
    console.log('init app')
  }

  let [ fontsLoaded ] = useFonts({
    'Tajawal-Medium': require('./../assets/fonts/Tajawal-Medium.ttf'),
    'Tajawal-Bold': require('./../assets/fonts/Tajawal-Bold.ttf'),
  });

  return { init, fontsLoaded }
};
