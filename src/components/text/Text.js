import { Text as RNText, StyleSheet} from 'react-native'
import React from 'react'
import { presets } from './Text.preset'

export default function Text({children, preset="default", style}) {
  const textStyles = StyleSheet.compose(presets[preset], style)
  // const textStyles = StyleSheet.compose(presets["h1"], style)
  return (
   
      <RNText style={textStyles}S>{children}</RNText>
    
  )
}


//preset er explain 
// const user = {
//   name:'john',
// }

// console.log(user.name)  || console.log(user[name])