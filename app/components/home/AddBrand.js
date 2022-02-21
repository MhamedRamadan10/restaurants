import { useState } from 'react'
import { View, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import { TDText, TDInput } from './../../components'
import useIsDark from './../../hooks/useIsDark'

export default function AddBrand({branches}) {

  const { isDark, setIsDark, colors } = useIsDark()

  return (
    <View>

    </View>
  )
}

const styles = StyleSheet.create({

})
