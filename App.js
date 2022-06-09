import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Image, Pressable } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography';
import Text from './src/components/text/Text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';


const Stack = createNativeStackNavigator();


export default function App() {
  const [loaded] = useFonts({
      'Antonio-Medium':require("./assets/fonts/Antonio-Medium.ttf"),
      'Spartan-Bold':require("./assets/fonts/Spartan-Bold.ttf"),
      'Spartan-Regular':require("./assets/fonts/Spartan-Regular.ttf"),
  })

  if(!loaded){
    return(
      <>
      <Text>Font is loading...</Text>
     
      </>
    )
  }
  
  return (
     <>
       <NavigationContainer >
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
      </>
   
  )
}

const styles = StyleSheet.create({
      container:{
        flex:1,
        // backgroundColor:colors.black,
      }
});




