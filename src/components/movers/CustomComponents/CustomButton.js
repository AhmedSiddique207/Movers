import { StyleSheet, Text, View, Pressable } from 'react-native'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function CustomButton({ onPress, title, style }) {
  return (
    // <View style={styles.main}>
    <Pressable style={[styles.button, style, ]} onPress={onPress}>
      <View style={styles.buttontext}>
        <Text style={[styles.text,style]}  >{title}</Text>
      </View>
    </Pressable>
    //  </View>
  )
}

const styles = StyleSheet.create({

  button: {
    justifyContent: 'center',
    borderRadius: RFValue(10),
    backgroundColor: 'rgba(45, 137, 207, 1)',
    height: heightPercentageToDP(7),
    // width:widthPercentageToDP(90)

  },
  buttontext: {
    alignSelf: 'center',
  },
  text: {
    fontSize: RFValue(19),
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
  },
})