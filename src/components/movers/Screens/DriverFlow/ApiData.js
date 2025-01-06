import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGetProductsQuery, useAddProductMutation, useLazyGetProductsQuery, useDeleteProductMutation, } from '../../../../store/Apis/ClothingProductsApi.js';
import CustomButton from '../../CustomComponents/CustomButton.js';

export default function ApiData() {
  const { data } = useGetProductsQuery();
  const [addPost, { isLoading, isSuccess, isError, error }] = useAddProductMutation();
  const [fetchProducts, { data: lazyData, isLoading: isLazyLoading, isError: isLazyError, error: lazyError, isSuccess: isLazySuccess }] = useLazyGetProductsQuery();
  const [deleteProduct, { isLoading: deleteLoading }] = useDeleteProductMutation();

  const [products, setProducts] = useState([]);


  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  // Post API
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
  const fetchLazyData = () => {
    fetchProducts();
  };

  if (lazyData) {
    console.log('Lazy fetched Products:', lazyData);
  }

  // Delete API
  const handleDeleteApiData = async (item) => {
    try {
      await deleteProduct(item?.id).unwrap();

      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== item.id));
      console.log(`Deleted product: ${item.id}`);
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <View>
      <ScrollView>
        {/* Get API Data */}
        <View style={styles.apicont}>
          <Text style={styles.heading}>GetApi</Text>
          <Text style={styles.text}>Data is on console</Text>

          {/* items list*/}
          {products.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{uri:item?.image}} style={{width:widthPercentageToDP(80),height:heightPercentageToDP(20),resizeMode:'contain'}} />
              <Text style={styles.cardId}>Id:{item.id}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <CustomButton
                title={deleteLoading ? 'Deleting...' : 'Delete'}
                onPress={() => handleDeleteApiData(item)}
              />
            </View>
          ))}
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
          <CustomButton title={'Fetch Lazy Data'} onPress={() => fetchLazyData()} />
          {isLazyLoading && <Text style={styles.text}>Fetching data...</Text>}
          {isLazySuccess && <Text style={styles.text}>Data fetched successfully!</Text>}
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
  card: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Medium',
    color: 'grey',
  },
  cardId: {
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
