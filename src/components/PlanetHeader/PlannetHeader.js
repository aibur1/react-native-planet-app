import { View,StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from '../text/Text';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlannetHeader({backBtn, title="THE PLANET",}) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
     {/* jodi backBtn true hoy tahole pressable ta show korabo na hole korabo na */}
      {backBtn && (
        <Pressable style={{marginRight:spacing[4]}} onPress={()=>{navigation.goBack()}}>
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset='h2'>{title}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
         padding:spacing[5],
         borderBottomWidth:0.2,
         borderBottomColor:colors.white,
         flexDirection:"row",
         alignItems:"center",
    }
})