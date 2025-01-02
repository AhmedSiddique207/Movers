// import React from 'react';
// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { useGetProductsQuery,useAddProductMutation,useLazyGetProductsQuery } from '../../../../store/Apis/ClothingProductsApi.js';
// import CustomButton from '../../CustomComponents/CustomButton.js';

// export default function ApiData() {
//  //get api
//   const { data } = useGetProductsQuery();
// console.log(data,'get api data')
//   //post api
//   const [addPost, { isLoading, isSuccess, isError, error }] = useAddProductMutation();

//   const dataToSend = {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic',
//   };

//   const addPostData = async () => {
//     try {
//       const response = await addPost(dataToSend).unwrap(); 
//       console.log(response, 'Post API response');
//     } catch (err) {
//       console.error('Error posting data:', err);
//     }
//   };

//   return (
//     <View>
//       <ScrollView>
//         {/* Get API */}
//         <View style={styles.apicont}>
//           <Text style={styles.heading}>GetApi</Text>
//           {/* {data?.map((product, index) => (
//             <Text key={index} style={styles.text}>
//               {product.description}
//             </Text>
//           ))} */}
//           <Text style={styles.text}>Get API data is on console</Text>
//         </View>

//         {/* Post API */}
//         <View style={styles.apicont}>
//           <Text style={styles.heading}>PostApi</Text>
//           <CustomButton title={'Post Data'} onPress={()=>addPostData()} />
//           {isLoading && <Text style={styles.text}>Posting data...</Text>}
//           {isSuccess && <Text style={styles.text}>Data posted successfully!</Text>}
//           {isError && <Text style={styles.text}>Error: {error?.data?.message || 'Something went wrong'}</Text>}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   apicont: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: heightPercentageToDP(2),
//   },
//   text: {
//     color: 'black',
//     fontFamily: 'Poppins-Medium',
//   },
//   heading: {
//     color: 'red',
//     fontSize: RFValue(30),
//     fontFamily: 'Poppins-Medium',
//   },
// });



import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGetProductsQuery, useAddProductMutation, useLazyGetProductsQuery } from '../../../../store/Apis/ClothingProductsApi.js';
import CustomButton from '../../CustomComponents/CustomButton.js';

export default function ApiData() {
  // Get API
  const { data } = useGetProductsQuery();
  console.log(data, 'get api data');

  // Post API
  const [addPost, { isLoading, isSuccess, isError, error }] = useAddProductMutation();

  const dataToSend = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
  };

  const addPostData = async () => {
    try {
      const response = await addPost(dataToSend).unwrap();
      console.log(response, 'Post API response');
    } catch (err) {
      console.error('Error posting data:', err);
    }
  };

  // Lazy Query
  const [fetchProducts, { data: lazyData, isLoading: isLazyLoading, isError: isLazyError,error:lazyError }] = useLazyGetProductsQuery();

  const fetchLazyData = () => {
    fetchProducts(); 
    console.log(isLazyLoading,isLazyError,'eoor')
  };

  useEffect(() => {
    if (lazyData) {
      console.log(lazyData, 'lazy get api data');
    }
  }, [lazyData]);

  return (
    <View>
      <ScrollView>
        {/* Get API */}
        <View style={styles.apicont}>
          <Text style={styles.heading}>GetApi</Text>
          <Text style={styles.text}>Get API data is on console</Text>
        </View>

        {/* Post API */}
        <View style={styles.apicont}>
          <Text style={styles.heading}>PostApi</Text>
          <CustomButton title={'Post Data'} onPress={() => addPostData()} />
          {isLoading && <Text style={styles.text}>Posting data...</Text>}
          {isSuccess && <Text style={styles.text}>Data posted successfully!</Text>}
          {isError && <Text style={styles.text}>Error: {error?.data?.message || 'Something went wrong'}</Text>}
        </View>

        {/* Lazy Get API */}
        <View style={styles.apicont}>
          <Text style={styles.heading}>Lazy GetApi</Text>
          <CustomButton title={'Fetch Lazy Data'} onPress={fetchLazyData} />
          {isLazyLoading && <Text style={styles.text}>Fetching data...</Text>}
          {isLazyError && <Text style={styles.text}>Error: {lazyError?.data?.message || 'Something went wrong'}</Text>}
        
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  apicont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightPercentageToDP(2),
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  heading: {
    color: 'red',
    fontSize: RFValue(30),
    fontFamily: 'Poppins-Medium',
  },
});
