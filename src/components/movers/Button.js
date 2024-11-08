import { StyleSheet, Text, View, Pressable } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from 'react'

export default function Button({onPress,title}) {
  return (
    <View style={styles.main}>
  <Pressable style={styles.button}>
  <Text style={styles.text} onPress={onPress} >{title}</Text>
  </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
flex:1
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor:'rgba(45, 137, 207, 1)',
        height:50,
        width:'100%'
        
      },
      text: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '600',
        textAlign:'center',
        justifyContent:'center',
        fontSize:20
      },
})