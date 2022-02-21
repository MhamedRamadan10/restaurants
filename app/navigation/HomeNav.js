import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { List, Single } from './../screen'


const Stack = createNativeStackNavigator()

export default function HomeNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="Single" component={Single} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
