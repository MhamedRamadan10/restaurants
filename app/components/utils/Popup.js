import React from 'react'
import { Text, Pressable, StyleSheet, View, Modal } from 'react-native'
import { Constants } from './../../constants'
import { LinearGradient } from 'expo-linear-gradient'
import useIsDark from './../../hooks/useIsDark'


export default function Popup({ show=false , setShow, content, onSubmit, onCancel, noSubmit}) {
  const { isDark, setIsDark, colors } = useIsDark()
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      backdropOpacity={0.3}
      style={{justifyContent: 'flex-end', margin:0, maxHeight:Constants.H*.85, marginTop:'auto'}}
      onRequestClose={() => setShow(false)}>
      <View style={[styles.wrap,{ borderColor:colors.border}]}>

      {content}

      <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
        {!noSubmit && (
          <Pressable onPress={onSubmit} style={styles.submit}>
            <Text style={styles.submitText}>Ok</Text>
          </Pressable>
        )}

        <Pressable onPress={onCancel}>
          <Text style={styles.cancelText}>Close</Text>
        </Pressable>
      </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap:{justifyContent:'flex-end',margin:0,maxHeight:Constants.H*.85,marginTop:'auto', borderWidth:0, elevation:0, paddingVertical:30,borderTopLeftRadius:35,borderTopRightRadius:35,backgroundColor: 'rgba(220, 220, 220, 0.8)',
},
  submit:{backgroundColor:Constants.colors.baseColor,padding:5, paddingHorizontal:20, borderRadius:6},
  submitText:{color:'#fff', fontSize:18},
  cancelText:{color:'red', fontSize:18},
})
