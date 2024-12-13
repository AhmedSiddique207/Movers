import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/components/movers/Screens/Login'
import Forget from '../src/components/movers/Screens/Forget';
import Forgetotp from '../src/components/movers/Screens/Forgetotp';
import Resetpassword from '../src/components/movers/Screens/Resetpassword';
import Signup from '../src/components/movers/Screens/Signup';
import SignupOTP from '../src/components/movers/Screens/SignupOTP';
import SelectCategory from '../src/components/movers/Screens/UserFlow/SelectCategory';
import OrderFreight from '../src/components/movers/Screens/UserFlow/OrderFreight'
import DrawerNavigation from '../src/components/movers/Screens/DrawerNavigation';
import ProfileSetting from '../src/components/movers/Screens/UserFlow/ProfileSetting';
import OfferDriver from '../src/components/movers/Screens/UserFlow/OfferDriver';
import SelectDriver from '../src/components/movers/Screens/UserFlow/SelectDriver/Index'
import RequesyHistory from '../src/components/movers/Screens/UserFlow/RequesyHistory';
import Settings from '../src/components/movers/Screens/UserFlow/Settings';
import Safety from '../src/components/movers/Screens/UserFlow/Safety';
import Faqs from '../src/components/movers/Screens/UserFlow/Faqs';
import Navigator from '../src/components/movers/Screens/UserFlow/Navigator';
import DateDistance from '../src/components/movers/Screens/UserFlow/DateDistance';
import Languages from '../src/components/movers/Screens/UserFlow/Languages';
import RulesTerms from '../src/components/movers/Screens/UserFlow/RulesTerms';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        // initialRouteName='OrderFreight'
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}

      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Forget' component={Forget} />
        <Stack.Screen name='Forgetotp' component={Forgetotp} />
        <Stack.Screen name='Resetpassword' component={Resetpassword} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='SignupOTP' component={SignupOTP} />
        <Stack.Screen name='SelectCategory' component={SelectCategory} />
        <Stack.Screen name='OrderFreight' component={OrderFreight} />
        <Stack.Screen name='DrawerNavigation' options={{ headerShown: false }} component={DrawerNavigation} />
        <Stack.Screen name='ProfileSetting' component={ProfileSetting} />
        <Stack.Screen name='RequestHistory' component={RequesyHistory} />
        <Stack.Screen name='OfferDriver' component={OfferDriver} />
        <Stack.Screen name='SelectDriver' component={SelectDriver} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Safety' component={Safety} />
        <Stack.Screen name='Faqs' component={Faqs} />
        <Stack.Screen name='Navigator' component={Navigator} />
        <Stack.Screen name='DateDistance' component={DateDistance} />
        <Stack.Screen name='Languages' component={Languages} />
        <Stack.Screen name='RulesTerms' component={RulesTerms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

