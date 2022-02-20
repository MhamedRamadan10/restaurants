import { useEffect, useState, useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { TDScreen, TDText, } from './../../components'

export default function List({ navigation }) {


  return (
    <TDScreen action={false}>

      <TDText t='Home' />

    </TDScreen>
  )
}
