import { 
  View, 
  FlatList, 
  SafeAreaView, 
  StyleSheet, 
  Pressable ,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
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
  const [list, setList] = useState(PLANET_LIST);

  const renderItem = ({item}) => {
        return(<PlanetItem item={item} /> );
  };

  //pass kora text argument ta ke ei function nilo then 
  const searchFilter = (text) => {
    //filter ta kortesi holo main array theke
    const filteredList = PLANET_LIST.filter(item => {
      //just nam ta match korte hobe tai nam ta niye aslam filter korar por
      const itemName = item.name.toLowerCase();
      //user typed text
      const userTypedText = text.toLowerCase();
      // >-1 mane milse
      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
       <PlannetHeader />

       <TextInput 
          placeholder="Type the planet name"
          placeholderTextColor={colors.white}
          autoCorrect={false}
          style={styles.searchInput}
          onChangeText={(text) => searchFilter(text)}  // মানে text আরগুমেন্ট টা কে searchFilter ফাংশনে পাস করে দাও
          
          />


       <FlatList 
          contentContainerStyle={styles.list}
          data={list}
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

    },
    searchInput:{
      padding:spacing[4],
      color:colors.white,
      borderBottomColor:colors.white,
      borderBottomWidth:1,
      margin:spacing[5],
      
    }
    
})