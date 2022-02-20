import { Pressable, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Constants } from './../../constants'
import { TDText } from './../../components'

export default function TDButton({text, action, textStyle, style, loading}) {

  return (
      <Pressable onPress={action} disabled={loading} style={[styles.wrapper, style]}>
        <TDText t={text} style={[styles.text, textStyle]} isCenter />
        {loading && <ActivityIndicator size="small" color='#fff' style={{marginHorizontal:10}}/> }
      </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper:{ backgroundColor:Constants.colors.baseColor, padding:15, borderRadius:12, width:'90%', flexDirection:'row', justifyContent:'center', alignSelf:'center'},
  text:{color:'#fff',}
})
