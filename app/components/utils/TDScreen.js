import React from 'react'
import { ActivityIndicator, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Constants } from './../../constants'
import { useScroll, useIsDark } from './../../hooks'
import TDHeader from './TDHeader'


export default function CustomScreen({children, loading, title, action, getNextPage, style}) {

  const { isCloseToBottom } = useScroll()
  const { isDark, setIsDark, colors } = useIsDark()
  // alert('isDark',isDark);

  return (
    <View>
      {title &&(
        <TDHeader title={title} action={action}/>
      )}

      <ScrollView
        onScroll={({nativeEvent}) => isCloseToBottom(nativeEvent) && getNextPage() }
        style={{backgroundColor:isDark?colors.background:'#fafafa', paddingVertical:10, minHeight:Constants.H}}>
        <StatusBar backgroundColor={isDark?colors.background:'#fafafa'} barStyle={isDark?'light-content':'dark-content'} />

        <SafeAreaView >
          <View style={[style]}>{children}</View>
        </SafeAreaView>

        <View style={{marginBottom:100}}/>
      </ScrollView>
    </View>
  )
}
