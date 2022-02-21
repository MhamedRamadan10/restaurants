import { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet, Image, ScrollView } from 'react-native'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import { Constants } from './../../constants'
import { TDText, TDInput } from './../../components'
import useIsDark from './../../hooks/useIsDark'
import MultiSelect from 'react-native-multiple-select'


export default function AddBrand({branches, tags, add, name, setName, addTags, setAddTage}) {

  const [selectedItem, setSelectedItem] = useState([])
  const { isDark, setIsDark, colors } = useIsDark()

  useEffect(()=> mapTags() ,[selectedItem])

  const mapTags = () => {
    let arr = []
    selectedItem.map(e=> arr.push(tags[e]))
    setAddTage(arr)
  }


  return (
    <View style={{paddingHorizontal:'2%'}}>
      <TDInput
        value={name}
        setValue={setName}
        placeholder='Name ..'
        style={{width:'90%'}}
      />
      <MultiSelect
          hideTags
          items={tags}
          uniqueKey="id"
          onSelectedItemsChange={setSelectedItem}
          selectedItems={selectedItem}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          altFontFamily="Tajawal-Medium"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          styleDropdownMenuSubsection={{borderRadius:12, width:'90%'}}
          styleMainWrapper={{ width:'96%', alignSelf:'center'}}
          styleDropdownMenu={{ height:50}}
          styleTextDropdown={{paddingLeft:10}}
        />
        {addTags.length>0 && (
          <ScrollView horizontal>
            {addTags.map((e,k)=>(
              <TDText t={e.name} key={k} style={[styles.tag, {borderColor:colors.border}]}/>
            ))}
          </ScrollView>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  tag:{borderWidth:1, marginHorizontal:5, borderRadius:12, paddingVertical:3, paddingHorizontal:8}
})
