import { View,StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/Text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

export default function PlannetHeader() {
  return (
    <View style={style.container}>
      <Text preset='h2'>THE PLANETS</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
         padding:spacing[5],
         borderBottomWidth:0.2,
         borderBottomColor:colors.white,
    }
})