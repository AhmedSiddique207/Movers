import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { useGetProductsQuery, useAddProductMutation, useLazyGetProductsQuery, useDeleteProductMutation, useUpdateDataMutation, usePutUpdatePostMutation } from '../../../../store/Apis/ClothingProductsApi.js';
import CustomButton from '../../CustomComponents/CustomButton.js';

export default function ApiData() {
  const { data } = useGetProductsQuery();
  const [addPost, { isLoading, isSuccess, isError, error }] = useAddProductMutation();
  const [fetchProducts, { data: lazyData, isLoading: isLazyLoading, isError: isLazyError, error: lazyError, isSuccess: isLazySuccess }] = useLazyGetProductsQuery();
  const [deleteProduct, { isLoading: deleteLoading }] = useDeleteProductMutation();

  const [products, setProducts] = useState([]);
  //get api
  console.log(data, 'getApiData')

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
    console.log(lazyData, 'Lazy fetched Products');
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

  //put api
  const [updatePost, { isPutLoading, isPutSuccess, isPutError }] = usePutUpdatePostMutation();
  const [postId, setPostId] = useState('');
  const [postData, setPostData] = useState({ title: '' });

  const handlePut = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePost({ id: postId, data: postData }).unwrap();
      console.log('Post updated successfully!', response);
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };
  return (
    <View>
      <ScrollView>
        {/* Get API Data */}
        <View style={styles.apicont}>
          <Text style={styles.heading}>GetApi</Text>
          <Text style={styles.text}>Data is on console</Text>

          {/*delete items list*/}
          {products.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item?.image }} style={styles.image} />
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

        {/* put api */}
        <View style={styles.apicont}>
          <Text style={styles.heading}>Put Update Data</Text>

          <TextInput
            style={styles.input}
            placeholder="Post ID"
            value={postId}
            onChangeText={(text) => setPostId(text)}
            keyboardType="numeric"
            placeholderTextColor='#808080'
          />
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={postData.title}
            onChangeText={(text) => setPostData({ ...postData, title: text })}
            placeholderTextColor='#808080'
          />
          {isPutLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <CustomButton title="Update Post" onPress={handlePut} />
          )}
          {isPutSuccess && <Text style={styles.success}>Post updated successfully!</Text>}
          {isPutError && <Text style={styles.error}>Failed to update the post. Please try again.</Text>}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  apicont: {
    alignItems: 'center',
    marginVertical: hp(2),
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(14),
    textAlign: 'center',
  },
  heading: {
    color: 'red',
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  card: {
    width: wp(90),
    backgroundColor: '#f9f9f9',
    borderRadius: RFValue(10),
    marginVertical: hp(1),
    alignItems: 'center',
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
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
    color: 'grey',
    textAlign: 'center',
  },
  cardId: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Medium',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: wp(80),
    height: hp(20),
    resizeMode: 'contain',
  },
  input: {
    borderWidth: RFValue(1),
    borderColor: '#ccc',
    borderRadius: RFValue(10),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    marginBottom: hp(1),
    color: 'black',
    fontSize: RFValue(14),
    textAlign: 'center',
    width: widthPercentageToDP(80)
  },
  textarea: {
    textAlignVertical: 'top',
  },
  success: {
    color: 'green',
    textAlign: 'center',
    fontSize: RFValue(14),
    marginTop: hp(1),
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: RFValue(14),
    marginTop: hp(1),
  },
});
