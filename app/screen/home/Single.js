import { useEffect, useState, useCallback } from 'react'
import { View, ScrollView, StyleSheet, StatusBar, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Constants } from './../../constants'
import { TDText, Item } from './../../components'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import useIsDark from './../../hooks/useIsDark'


export default function Single({ route, navigation }) {

  const [item, setitem] = useState([])

  const { isDark, setIsDark, colors } = useIsDark()

  useEffect(()=> setitem(route.params.item) , [])

  return (
    <LinearGradient colors={isDark?[colors.background, colors.card]:['#ededed', '#fff']} >
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScrollView >
        <ImageBackground style={styles.img} source={{uri:item.logo}}  >
          <Icon name='arrow-left' style={styles.back} onPress={()=>navigation.goBack()}/>
          <LinearGradient colors={colorsGradient} style={styles.wrapTitle}>
            <TDText t={item.name} style={styles.title} bold/>
            {item.tags &&
              <TDText style={styles.tags} t={item.tags.map((e,k)=><TDText style={styles.tags} key={k} t={`${e.name}${(item.tags.length-1)!=k ? ',':''}`}/>)} />
            }
          </LinearGradient>
        </ImageBackground>

        <View style={[styles.section,{backgroundColor:colors.background}]}>
          <TDText t={item.description} style={styles.desc}/>
          {item.items && item.items.map((e, k)=> <Item item={e} key={k}/> )}
        </View>

      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  img:{width:'100%', height: Constants.H*.4, resizeMode:'cover',justifyContent:'space-between'},
  section:{borderTopRightRadius:35,borderTopLeftRadius:35, marginTop:-30, minHeight:Constants.H*.8},
  title:{color:'#fff', paddingHorizontal:10,  paddingTop:20},
  tags:{fontSize:16, color:'#fff',paddingBottom:45, paddingHorizontal:10, marginTop:-5},
  desc:{padding:15},
  back:{fontSize:35,backgroundColor:'rgba(0, 0, 0, 0.2)', alignSelf:'flex-start', color:'#fff', padding:10, marginTop:30},
})
const colorsGradient = ['rgba(0, 0, 0, 0.0)','rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.4))','rgba(0, 0, 0, 0.6))', 'rgba(0, 0, 0, 0.8))']
