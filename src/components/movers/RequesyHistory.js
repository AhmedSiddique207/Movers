import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader'
import { useNavigation } from '@react-navigation/native';

export default function RequesyHistory() {

    const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>

    <CustomHeader
     title={'Request History'}
      onBackPress={() => navigation.goBack()}
    />
      
    </View>
  )
}

const styles = StyleSheet.create({})