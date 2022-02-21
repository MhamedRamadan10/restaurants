import React from 'react'
import { Text, Pressable, StyleSheet, View, Modal } from 'react-native'
import { Constants } from './../../constants'
import { LinearGradient } from 'expo-linear-gradient'
import useIsDark from './../../hooks/useIsDark'


export default function Popup({ show=false , setShow, content, onSubmit, onCancel}) {
  const { isDark, setIsDark, colors } = useIsDark()
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      style={{justifyContent: 'flex-end', margin:0, maxHeight:Constants.H*.85, marginTop:'auto'}}
      onRequestClose={() => setShow(false)}>
      <View style={[styles.wrap,{backgroundColor:colors.card, borderColor:colors.border}]}>

      {content}

      <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
        <Pressable onPress={onSubmit} style={styles.submit}>
          <Text style={styles.submitText}>ok</Text>
        </Pressable>
        <Pressable onPress={onCancel}>
          <Text style={styles.cancelText}>cancel</Text>
        </Pressable>
      </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap:{justifyContent:'flex-end',margin:0,maxHeight:Constants.H*.85,marginTop:'auto', borderWidth:1, paddingVertical:30,borderTopLeftRadius:25,borderTopRightRadius:25,},
  submit:{backgroundColor:Constants.colors.baseColor,padding:5, paddingHorizontal:20, borderRadius:6},
  submitText:{color:'#fff', fontSize:18},
  cancelText:{color:'red', fontSize:18},
})
