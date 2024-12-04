import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import AppNavigator from './config/appNavigator'

const App = () => {
  return (
 
    <>
<StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
<Provider store={store}>
<AppNavigator/>
</Provider>
    </>
  )
}

export default App