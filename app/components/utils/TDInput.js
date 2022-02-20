import React, { forwardRef } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Constants } from './../../constants'

export default function TDInput({value, numberOfLines=1, setValue, placeholder, icon=false, autoFocus=false, keyboardType='default', editable=true, isPassword, style}) {

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input,style]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        editable={editable}
        secureTextEntry={isPassword}
        numberOfLines={numberOfLines}
        multiline={numberOfLines>1}
      />
      {icon && icon}
    </View>

  )
}

const styles = StyleSheet.create({
  wrapper:{ backgroundColor:'#fff', padding:5, borderRadius:12, flexDirection:'row', width:'90%', alignSelf:'center',marginBottom:20},
  input:{ fontSize:18, padding:10,color:Constants.colors.baseColor,fontFamily:'Tajawal-Medium'},
})
