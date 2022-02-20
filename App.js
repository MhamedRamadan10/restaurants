import { useState } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import AppContext  from './app/context/AppContext'
import { HomeNav } from './app/navigation'
import { useInit } from './app/hooks'
import AppLoading from 'expo-app-loading'

export default function App() {

  const [ isDark, setIsDark ] = useState(null)
  const [ isReady, setReady ] = useState(false)
  const { init, fontsLoaded } = useInit(setIsDark)


  if ( !isReady || !fontsLoaded )
  return  <AppLoading startAsync={init} onFinish={()=> setReady(true)} onError={console.warn}/>

  return (
    <AppContext.Provider value={{isDark, setIsDark }}>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme }>
        <HomeNav/>
      </NavigationContainer>
    </AppContext.Provider>
  )
}
