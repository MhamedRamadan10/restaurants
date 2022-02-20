import React from 'react'
import { Text, Pressable, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { TDText } from './../../components'
import useIsDark from './../../hooks/useIsDark'

export default function Tags({brands, action, onPress}) {

  const { isDark, setIsDark, colors } = useIsDark()

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {brands.map((item, key)=>(
        <Pressable key={key} onPress={onPress} style={[styles.wrap,{borderColor:isDark?colors.border:'#ededed'}]}>
          <ImageBackground style={styles.img} imageStyle={{ borderRadius: 12}} source={{uri:item.image}} >
            <LinearGradient colors={colorsGru} style={styles.wrapTitle}>
              <TDText t={item.name} style={styles.title} bold/>
            </LinearGradient>
          </ImageBackground>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrap:{borderRadius: 12, borderWidth:1, margin:10, marginTop:0, width:Constants.W*.4},
  img:{width:'100%', height: Constants.H*.15, resizeMode:'cover',justifyContent:'flex-end'},
  title:{color:'#fff', padding:10, fontSize:20, paddingTop:20 },
  wrapTitle:{borderBottomLeftRadius:12, borderBottomRightRadius:12}
})

const colorsGru = ['rgba(0, 0, 0, 0.0)','rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.4))','rgba(0, 0, 0, 0.6))', 'rgba(0, 0, 0, 0.8))']
