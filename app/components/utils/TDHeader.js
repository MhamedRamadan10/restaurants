import React from 'react'
import { Text, Pressable, StyleSheet, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import TDText from './TDText'

export default function TDHeader({title, action}) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, paddingBottom:Constants.H*.02, backgroundColor:'#fafafa'}}>
      {action ?
        <Icon name='chevron-left' onPress={action} style={{fontSize:30, color:Constants.colors.baseColor}}/> :
        <Icon name='chevron-left' style={{fontSize:30, color:'transparent'}}/>
      }
      <TDText t={title} isCenter isBold/>
      <Icon name='chevron-left' style={{fontSize:30, color:'transparent'}}/>
    </View>
  )
}
