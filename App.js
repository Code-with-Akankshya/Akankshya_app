import {Text , View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import  Login from './screens/Login'
import  Signup from './screens/Signup'
import  Welcome from './screens/Welcome'
import reusableButton from './screens/reusableButton';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    {/* <Stack.Navigator
      initialRouteName='Welcome'>
      <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown:false
      }}
      />
        <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown:false
      }}
      />
        <Stack.Screen
      name="Signup"
      component={Signup}
      options={{
        headerShown:false
      }}
      /> 

    </Stack.Navigator> */}
    <Stack.Navigator><Stack.Screen name='reusable' component={reusableButton} options={{headerShown:false}}></Stack.Screen></Stack.Navigator>
    </NavigationContainer>
  );
}