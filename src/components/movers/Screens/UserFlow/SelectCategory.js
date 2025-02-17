import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomButton from '../../CustomComponents/CustomButton';
import { categories } from '../../../../utils/constants/Data';

export default function SelectCategory() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <KeyboardAvoidingView style={styles.mainCont} behavior={'height'} keyboardVerticalOffset={0}>
      <View style={styles.secondaryCont}>
        <View style={styles.textCont}>
          <View style={styles.startDivCont}>
            <View style={styles.TextStart}>
              <Text style={styles.lets}>Earn With us</Text>
            </View>
            <View style={styles.TextDetail}>
              <Text style={styles.fakeText}>
                Join MoveEase and offer top-quality moving, recovery, and water supply services. Become part of our dedicated team and help make every move seamless and stress-free.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.flatlistCategory}>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryCard,
                  selectedCategory === item.id && styles.selectedCategoryCard,
                ]}
                onPress={() => handleSelectCategory(item.id)}
              >
                <View
                  style={[
                    styles.imageContainer,
                    selectedCategory === item.id && styles.selectedImageContainer,
                  ]}
                >
                  <Image
                    source={item.image}
                    style={[
                      styles.imageStyle,
                      selectedCategory === item.id && styles.selectedImageStyle,
                    ]}
                  />
                </View>
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === item.id && styles.selectedCategoryText,
                  ]}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={styles.loginButtonCont}>
          <CustomButton
            title={'Continue'}
            onPress={() => {
              if (selectedCategory) {
                navigation.navigate('DrawerNavigation');
              }
            }}
            disabled={!selectedCategory}
          />
        </View>


      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: 'white',
    height: hp(100),
    width: wp(100),
  },
  secondaryCont: {
    height: hp(100),
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(3),
    // backgroundColor: 'purple'
  },
  textCont: {
    height: hp(35),
    // backgroundColor: 'pink'
  },
  startDivCont: {
    backgroundColor: 'rgba(45, 137, 207, 1)',
    width: wp(90),
    alignSelf: 'center',
    height: hp(30),
    borderRadius: 10,
    justifyContent: 'center',

  },
  TextStart: {
    paddingHorizontal: hp(4),

    // alignSelf:'center'
  },
  TextDetail: {
    paddingHorizontal: hp(4),
    // alignSelf:'center'
  },
  lets: {
    fontSize: RFValue(25),
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  fakeText: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  flatlistCategory: {
    height: hp(45),
    // backgroundColor: 'red',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: hp(2),
    marginVertical: hp(1.5),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: wp(90),
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
  },
  selectedCategoryCard: {
    backgroundColor: '#4A90E2',
  },
  imageContainer: {
    // width:wp(15) ,
    // height:hp(15),
    width: wp(14),
    height: wp(14),
    borderRadius: 25,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImageContainer: {
    backgroundColor: '#fff',
  },
  imageStyle: {
    width: wp(9),
    height: hp(4),
    resizeMode: 'contain',
  },
  selectedImageStyle: {
    tintColor: '#4A90E2',
  },
  categoryText: {
    fontSize: RFValue(16),
    color: '#333',
    fontFamily: 'Poppins-Medium',
    paddingLeft: wp(3),
  },
  selectedCategoryText: {
    color: '#fff',
  },
  loginButtonCont: {
    alignSelf: 'center',
    height: hp(20),
    width: wp(90),
    // backgroundColor: 'yellow',
    justifyContent: 'center'

  },
});
