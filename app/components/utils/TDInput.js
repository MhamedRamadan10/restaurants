import React, { forwardRef } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Constants } from './../../constants'
import useIsDark from './../../hooks/useIsDark'

export default function TDInput({value, numberOfLines=1, setValue, placeholder, icon=false, autoFocus=false, keyboardType='default', editable=true, isPassword, style}) {

  const { isDark, setIsDark, colors } = useIsDark()
  console.log(colors);
  return (
    <View style={[styles.wrapper,{backgroundColor:colors.border}]}>
      {icon && icon}
      <TextInput
        style={[styles.input,{backgroundColor:colors.border, color:colors.text},style]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        editable={editable}
        secureTextEntry={isPassword}
        numberOfLines={numberOfLines}
        multiline={numberOfLines>1}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  wrapper:{ backgroundColor:'#fff', padding:5, borderRadius:12, flexDirection:'row', width:'95%', alignSelf:'center',marginBottom:20},
  input:{ fontSize:18, padding:10, paddingVertical:4, color:Constants.colors.baseColor,fontFamily:'Tajawal-Medium'},
})
