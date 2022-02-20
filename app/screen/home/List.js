import { useEffect, useState } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { TDScreen, TDText, TDInput, Tags } from './../../components'
import { useScroll, useIsDark } from './../../hooks'
import { MaterialCommunityIcons as Icon} from "@expo/vector-icons"
import DATA from './../../constants/data.json'

export default function List({ navigation }) {

  const [brands, setBrands] = useState([])
  const [tags, setTags] = useState([])
  const [filter, setFilter] = useState('')

  const { colors } = useIsDark()


  useEffect(()=> handleData(),[])

  const handleData = () => {
    setBrands(DATA.brands)
    brands.map(e=> {
      e.tags.map(tag=> {
        let tagArr = tags
        if (!tags.map(e=> e.name).includes(tag.name)) tagArr.push(tag)
        setTags(tagArr)
      })
    })
  }

  return (
    <TDScreen >

      <TDInput
        value={filter}
        setValue={setFilter}
        placeholder='Search for..'
        style={{width:'90%'}}
        icon={<Icon name='magnify' style={{color:'#999', fontSize:25, alignSelf:'center'}} />}
      />

      <Tags tags={tags}/>

      {/* <Brands brands={brands}/> */}

    </TDScreen>
  )
}
