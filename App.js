import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { HomeNav } from './app/navigation'
import { useInit } from './app/hooks'
import AppLoading from 'expo-app-loading'

export default function App() {

  const [ isReady, setReady ] = useState(false)
  const { init, fontsLoaded } = useInit()


  if ( !isReady || !fontsLoaded )
  return  <AppLoading startAsync={init} onFinish={()=> setReady(true)} onError={console.warn}/>

  return (
      <NavigationContainer>
        <HomeNav/>
      </NavigationContainer>
  )
}
