import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/components/movers/Login'
import Forget from '../src/components/movers/Forget';
import Forgetotp from '../src/components/movers/Forgetotp';
import Resetpassword from '../src/components/movers/Resetpassword';
import Signup from '../src/components/movers/Signup';
import SignupOTP from '../src/components/movers/SignupOTP';
import SelectCategory from '../src/components/movers/SelectCategory';
import OrderFreight from '../src/components/movers/OrderFreight'

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{ headerShown: false, animation:'slide_from_right' }}
        
      >
        <Stack.Screen name='Login' component={Login} />
       <Stack.Screen name='Forget' component={Forget} />
       <Stack.Screen name='Forgetotp' component={Forgetotp} />
       <Stack.Screen name='Resetpassword' component={Resetpassword} />
       <Stack.Screen name='Signup' component={Signup} />
       <Stack.Screen name='SignupOTP' component={SignupOTP} />
       <Stack.Screen name='SelectCategory' component={SelectCategory} />
       <Stack.Screen name='OrderFreight' component={OrderFreight} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

