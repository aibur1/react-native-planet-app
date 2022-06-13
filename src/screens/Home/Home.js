import { View, FlatList, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Text from '../../components/text/Text';
import PlannetHeader from '../../components/PlanetHeader/PlannetHeader';
import { colors } from '../../theme/colors';
import { PLANET_LIST } from '../../data/PlanetList/PlanetList';
import { spacing } from '../../theme/spacing';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({item}) => {
  const {name, color} = item;
   const navigation = useNavigation();
   return (
    <Pressable onPress={ () => {
      navigation.navigate("Details", {planet:item});
       }} style={styles.item}>
           <View style={{flexDirection:"row", alignItems:"center" }}>
               <View style={[styles.circle, {backgroundColor:color}]} />
               <Text preset='h4' style={styles.itemName}>{name}</Text>
           </View>
         <AntDesign name="right" size={18} color="white" />
    </Pressable>
   )
}

export default function Home({navigation}) {

  const renderItem = ({item}) => {
        return(
            <PlanetItem item={item} />
         );
  }

  return (
    <SafeAreaView style={styles.container}>
       <PlannetHeader />
       <FlatList 
          contentContainerStyle={styles.list}
          data={PLANET_LIST}
          keyExtractor={(item,index) => item.name}
          renderItem={renderItem}
          ItemSeparatorComponent = { () => <View style={styles.separator}/>}
       />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
    },
    item:{
       flexDirection:'row',
       alignItems:"center",
       justifyContent:"space-between",
       padding:spacing[4]
    },
    itemName:{
      textTransform:"uppercase",
      marginLeft:spacing[4]
    },
    circle:{
      width:30,
      height:30,
      borderRadius:15,
    },
    list:{
      padding:spacing[4],
    },
    separator:{
     borderWidth:0.5,
     borderBottomColor:colors.white,

    }
    
})