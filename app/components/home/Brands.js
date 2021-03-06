import React from 'react'
import { View, Image, Pressable, StyleSheet,  ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { TDText } from './../../components'
import useIsDark from './../../hooks/useIsDark'

export default function Tags({brands, navigation}) {

  const { isDark, setIsDark, colors } = useIsDark()

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {brands.map((item, key)=>(
        <Pressable key={key} onPress={()=>navigation.navigate('Single',{item})} style={[styles.wrap,{backgroundColor: colors.card,}]}>
          <View style={styles.row}>
            <Image source={{uri:item.logo != ''?item.logo:'https://www.shareicon.net/data/512x512/2016/08/04/806801_pin_512x512.png'}} style={styles.img} />
            <View style={{paddingVertical:10}}>
              <TDText t={item.name} style={styles.title} bold/>
              <TDText style={styles.tagsWarp} t={item.tags.map((e,k)=><TDText style={styles.tags} key={k} t={`${e.name}${(item.tags.length-1)!=k ? ',':''}`}/>)} />
            </View>
          </View>
        </Pressable>
      ))}
      {brands.length == 0 && <TDText t='😕 No data' center style={{marginHorizontal:5, marginVertical:Constants.H*.15}}/> }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrap:{ borderRadius:12, margin:10, marginTop:0, width:Constants.W*.95},
  img:{width:Constants.H*.1, height: Constants.H*.1, borderRadius: 12, resizeMode:'contain',alignSelf:'center', marginHorizontal:10},
  title:{fontSize:20},
  tags:{fontSize:16, color:'#999'},
  tagsWarp:{maxWidth:Constants.W*.7,marginTop:-10, marginLeft:-2},
  row:{flexDirection:'row', }
})

const colorsGru = ['rgba(0, 0, 0, 0.0)','rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.4))','rgba(0, 0, 0, 0.6))', 'rgba(0, 0, 0, 0.8))']
