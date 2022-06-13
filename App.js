import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import Text from './src/components/text/Text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import Details from './src/screens/Details/Details';


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
              <Stack.Screen name="Details" component={Details} />
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




