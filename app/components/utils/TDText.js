import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'
import { useScroll, useIsDark } from './../../hooks'

export default function TDText({children, style, center, lines, t, bold}) {
  const { isDark, colors } = useIsDark()
  const mainStyle = [
    {
      fontFamily: bold ? 'Tajawal-Bold' : 'Tajawal-Medium',
      fontSize: bold ? 28 : 20,
      textAlign:center?'center':'auto',
      alignSelf:center ? 'center' : 'flex-start',
      color:colors.text
    },
    style
  ]
  return (
    <Text style={mainStyle} numberOfLines={lines}> {t} </Text>
  )
}
