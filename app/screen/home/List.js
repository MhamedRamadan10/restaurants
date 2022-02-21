import { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { TDScreen, TDText, TDInput, Tags, Brands } from './../../components'
import { useScroll, useIsDark, useForceUpdate } from './../../hooks'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import DATA from './../../constants/data.json'

export default function List({ navigation }) {

  const [brands, setBrands] = useState([])
  const [tags, setTags] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredBrands, setFilteredBrands] = useState([])
  const [selectTag, setSelectTag] = useState('')

  const { forceUpdate } = useForceUpdate()


  useEffect(()=> handleBrands(),[])
  useEffect(()=> handleTags(),[brands])

  const handleBrands = () => setBrands(DATA.brands)

  const handleTags = () => {
    let tagArr = []
    console.log(brands);
    brands.map(e=> {
      e.tags.map(tag=> {
        tagArr = tags
        if (!tags.map(e=> e.name).includes(tag.name)) tagArr.push(tag)
      })
    })
    setTags(tagArr)
    forceUpdate()
  }


  return (
    <TDScreen >

      <TDInput
        value={filter}
        setValue={setFilter}
        placeholder='Search for..'
        style={{width:'90%'}}
        icon={<Icon name='magnify' style={{color:'#999', fontSize:25, alignSelf:'center', marginLeft:5}} />}
      />

      {tags.length > 0 && <Tags tags={tags} selectTag={selectTag} setSelectTag={setSelectTag}/> }

      <TDText t='Resturanst' bold style={{marginHorizontal:5, marginVertical:10}}/>

      <Brands
        brands={
          brands.filter(i =>{
            if (filter == '' && selectTag == '') return i
            else if (filter != '' && selectTag == '')
            return i.name.toLowerCase().includes(filter.toLowerCase())
            else if (filter == '' && selectTag != '')
            return i.tags.map(tag=> tag.name.toLowerCase()).includes(selectTag != '' && selectTag.name.toLowerCase())
            else return (
              i.name.toLowerCase().includes(filter.toLowerCase()) &&
              i.tags.map(tag=> tag.name.toLowerCase()).includes(selectTag != '' && selectTag.name.toLowerCase())
            )
          })
        }
        navigation={navigation}
      />

      </TDScreen>
  )
}
