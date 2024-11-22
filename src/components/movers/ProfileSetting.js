import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderUser from './HeaderUser'

export default function ProfileSetting() {
  return (
    <View>
        <HeaderUser title={'Profile Settings'} />
      {/* <Text style={styles.text}>ProfileSetting</Text> */}

    </View>
  )
}

const styles = StyleSheet.create({
    // text:{
    //     color:'red',
    //     fontFamily:'Poppins-Black',
    //     backgroundColor:'yellow',
    //     alignSelf:'center',
    //     marginTop:50,
    // }
})