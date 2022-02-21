import { useState } from 'react'
import { View, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import { TDText } from './../../components'
import useIsDark from './../../hooks/useIsDark'

export default function Item({item}) {

  const { isDark, setIsDark, colors } = useIsDark()

  return (
    <Pressable style={[styles.wrap,{backgroundColor: colors.card,}]}>
      <View style={styles.row}>

        <Image source={{uri:'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png'}} style={styles.img} />
        <View style={{paddingVertical:10}}>
          <TDText t={item.name} style={styles.title} bold/>
          <TDText t={item.description} style={styles.description}/>
          <TDText t={item.price} style={styles.price} bold/>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrap:{borderRadius: 12, margin:10, marginTop:0, width:Constants.W*.95,paddingBottom:4, backgroundColor:'#fff',},
  img:{width:Constants.H*.1, height: Constants.H*.1, marginHorizontal:10, resizeMode:'cover',alignSelf:'center'},
  title:{maxWidth:Constants.W*.6, fontSize:22},
  description:{fontSize:14,maxWidth:Constants.W*.6, marginTop:-5, marginLeft:2},
  wrapTitle:{borderBottomLeftRadius:12, borderBottomRightRadius:12},
  row:{flexDirection:'row' },
  price:{fontSize:18}
})

const colorsGru = ['rgba(0, 0, 0, 0.0)','rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.4))','rgba(0, 0, 0, 0.6))', 'rgba(0, 0, 0, 0.8))']
