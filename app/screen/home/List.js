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

  const { colors } = useIsDark()
  const { forceUpdate } = useForceUpdate()


  useEffect(()=> handleBrands(),[])
  useEffect(()=> handleTags(),[brands])

  const handleBrands = () => setBrands(DATA.brands)

  const handleTags = () => {
    console.log(brands);
    let tagArr = []
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

      {tags.length > 0 && <Tags tags={tags}/> }

      <TDText t='Resturanst' bold style={{marginHorizontal:5, marginVertical:10}}/>

      <Brands brands={brands}/>

    </TDScreen>
  )
}
