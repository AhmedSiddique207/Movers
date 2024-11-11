import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LoginSignup from './src/components/LoginSignup'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import Login from './src/components/movers/Login'
import AppNavigator from './config/appNavigator'

const App = () => {
  return (
 
    <>
<StatusBar barStyle="dark-content" backgroundColor={'white'} />
<Provider store={store}>
<AppNavigator/>
</Provider>
    </>
  )
}

export default App