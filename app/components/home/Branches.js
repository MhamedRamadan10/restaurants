import { useState } from 'react'
import { View, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import { TDText } from './../../components'
import useIsDark from './../../hooks/useIsDark'

export default function Branches({branches}) {

  const { isDark, setIsDark, colors } = useIsDark()

  return (
    branches.length > 0 ? branches.map((e,k)=>(
      <Pressable key={k} style={[styles.wrap,{backgroundColor: colors.card,}]}>
        <View style={styles.row}>
          <Image source={{uri:'https://www.shareicon.net/data/256x256/2016/08/24/819514_gps_512x512.png'}} style={styles.img} />
          <View style={{paddingVertical:10}}>
            <TDText t={e.name} style={styles.title}/>
          </View>
        </View>
      </Pressable>
    ))
    :
    <TDText t='no branches found' center style={styles.title}/>
  )
}

const styles = StyleSheet.create({
  wrap:{borderRadius: 12, margin:10, marginTop:0, paddingVertical:20, width:Constants.W*.95,paddingBottom:4, backgroundColor:'#fff',},
  img:{width:Constants.H*.07, height: Constants.H*.07, marginHorizontal:10, resizeMode:'contain',alignSelf:'center'},
  title:{maxWidth:Constants.W*.6,},
  row:{flexDirection:'row' },
})

const colorsGru = ['rgba(0, 0, 0, 0.0)','rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.4))','rgba(0, 0, 0, 0.6))', 'rgba(0, 0, 0, 0.8))']
