import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomHeader from '../../CustomComponents/CustomHeader';
import { HistoryDetails } from '../../../../utils/constants/Data';
export default function RequesyHistory() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.historyMainContainer}>
      <View style={styles.historyDetailsTextContainer}>
        <Text style={styles.historyDateText} >{item.date}</Text>
        <Text style={styles.historyTemperatureText} >{item.temperature}</Text>
        <Text style={styles.historyLocationText} >{item.location}</Text>
        <Text style={styles.historyBranchText} >{item.branch}</Text>
        <Text style={styles.historyFareText} >AED {item.fare}</Text>
      </View>
      <View style={styles.historyStatusContainer}>
        <Text style={styles.historyStatusText}>{item.status}</Text>
      </View>
    </View>
  )
  return (
    <View style={styles.mainContainer}>

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
  mainContainer: {
    flex: 1
  },
  historyMainContainer: {
    width: wp(100),
    height: hp(27),
    borderBottomWidth: RFValue(1),
    borderColor: '#D7D7D7',
  },
  historyDetailsTextContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    width: wp(95),
    height: hp(22),
    alignSelf: 'center',
    // backgroundColor:'yellow'
  },
  historyStatusContainer: {
    width: wp(95),
    height: hp(5),
    alignSelf: 'center',
    // backgroundColor:'skyblue',
  },
  historyStatusText: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Medium',
    color: '#0DA800',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  historyDateText: {
    fontSize: RFValue(19),
    color: '#949494',
    fontFamily: 'Poppins-Medium',
  },
  historyTemperatureText: {
    fontSize: RFValue(19),
    color: '#2D89CF',
    fontFamily: 'Poppins-Medium',
  },
  historyLocationText: {
    fontSize: RFValue(16),
    color: '#424A54',
    fontFamily: 'Poppins-SemiBold',
  },
  historyBranchText: {
    fontSize: RFValue(16),
    color: '#424A54',
    fontFamily: 'Poppins-SemiBold',
  },
  historyFareText: {
    fontSize: RFValue(16),
    color: '#424A54',
    fontFamily: 'Poppins-SemiBold',
  },
})