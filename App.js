import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import Homescreen from './components/Homescreen';





export default function App() {
  const Stack = createNativeStackNavigator()
  return (

    <NavigationContainer initialRouteName="Login/">
    <StatusBar style="auto" />
    <View style={styles.container}>
      <Text>Home</Text>
     
   
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>


   

     

    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
