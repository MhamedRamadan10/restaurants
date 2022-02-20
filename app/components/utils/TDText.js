import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'


export default function TDText({children, style, isCenter, lines, t, isBold}) {
  const mainStyle = [
    {
      fontFamily: isBold ? 'Tajawal-Bold' : 'Tajawal-Medium',
      fontSize: isBold ? 28 : 20,
      textAlign:isCenter?'center':'auto',
      alignSelf:isCenter ? 'center' : 'flex-start',
      color:'#101010'
    },
    style
  ]
  return (
    <Text style={mainStyle} numberOfLines={lines}> {t} </Text>
  )
}
