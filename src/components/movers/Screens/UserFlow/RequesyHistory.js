import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CustomHeader from '../../CustomComponents/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

export default function RequesyHistory() {
  const navigation = useNavigation();
  const HistoryDetails = [
    { id: 1, date: '4th March', temperature: '54 C', location: 'Meri sehat-clinic | Pharmacy | lab', branch: 'Mehmoodabad Branch', fare: 200, status: "Completed" },
    { id: 2, date: '4th March', temperature: '54 C', location: 'Meri sehat-clinic | Pharmacy | lab', branch: 'Mehmoodabad Branch', fare: 200, status: "Completed" },
    { id: 3, date: '4th March', temperature: '54 C', location: 'Meri sehat-clinic | Pharmacy | lab', branch: 'Mehmoodabad Branch', fare: 200, status: "Completed" },
  ]
  const renderItem = ({ item }) => (
    <View style={styles.historymaincontainer}>
      <View style={styles.historydetailstextcontainer}>
        <Text style={styles.historydatetext} >{item.date}</Text>
        <Text style={styles.historytemperaturetext} >{item.temperature}</Text>
        <Text style={styles.historylocationtext} >{item.location}</Text>
        <Text style={styles.historybranchtext} >{item.branch}</Text>
        <Text style={styles.historyfaretext} >AED {item.fare}</Text>
      </View>
      <View style={styles.historystatuscontainer}>
        <Text style={styles.historystatustext}>{item.status}</Text>
      </View>
    </View>
  )
  return (
    <View style={styles.maincontainer}>

      <CustomHeader
        title={'Request History'}
        onBackPress={() => navigation.goBack()}
      />

      <FlatList
        data={HistoryDetails}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  },
  historymaincontainer: {
    width: wp(100),
    height: hp(27),
    borderBottomWidth: RFValue(1),
    borderColor: '#D7D7D7',
  },
  historydetailstextcontainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    width: wp(95),
    height: hp(22),
    alignSelf: 'center',
    // backgroundColor:'yellow'
  },
  historystatuscontainer: {
    width: wp(95),
    height: hp(5),
    alignSelf: 'center',
    // backgroundColor:'skyblue',
  },
  historystatustext: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Medium',
    color: '#0DA800',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  historydatetext: {
    fontSize: RFValue(19),
    color: '#949494',
    fontFamily: 'Poppins-Medium',
  },
  historytemperaturetext: {
    fontSize: RFValue(19),
    color: '#2D89CF',
    fontFamily: 'Poppins-Medium',
  },
  historylocationtext: {
    fontSize: RFValue(16),
    color: '#424A54',
    fontFamily: 'Poppins-SemiBold',
  },
  historybranchtext: {
    fontSize: RFValue(16),
    color: '#424A54',
    fontFamily: 'Poppins-SemiBold',
  },
  historyfaretext: {
    fontSize: RFValue(16),
    color: '#424A54',
    fontFamily: 'Poppins-SemiBold',
  },
})