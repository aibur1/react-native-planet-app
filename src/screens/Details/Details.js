import { View, SafeAreaView ,StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Text from '../../components/text/Text';
import PlannetHeader from '../../components/PlanetHeader/PlannetHeader';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import {  MercurySvg, EarthSvg, JupiterSvg, MarsSvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../../svg';


export default function Details({navigation, route}) {
  const planet = route.params.planet;
  // console.log("planet -->", route);
  const {name} = planet;

  const renderImage = (name) => {
      switch(name){
         case "mercury":
            return <MercurySvg />;
         case "earth":
            return <EarthSvg />;
         case "jupiter":
            return <JupiterSvg />;
         case "mars":
            return <MarsSvg />;
         case "neptune":
            return <NeptuneSvg />;
         case "saturn":
            return <SaturnSvg />;
         case "uranus":
            return <UranusSvg />;
         case "venus":
            return <VenusSvg />;
      }
  };

  return (
    <SafeAreaView style={styles.container}>
        <PlannetHeader  backBtn={true} />
        <ScrollView>
           <View style={styles.imageView}>
               {renderImage(name)}
           </View>
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black,
    },
   imageView:{
      padding:spacing[5],
      alignItems:"center",
      justifyContent:"center",
    }
})