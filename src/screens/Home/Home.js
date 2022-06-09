import { View, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../../components/text/Text'
import PlannetHeader from '../../components/PlanetHeader/PlannetHeader'
import { colors } from '../../theme/colors'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
       <PlannetHeader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
       
    }
})