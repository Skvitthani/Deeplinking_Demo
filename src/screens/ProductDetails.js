import React, {useEffect, useState} from 'react';
import {getSingleProduct} from '../services/Apis';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductDetails = ({route}) => {
  const productId = route?.params?.productId;
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSingleProduct(productId);
      console.log('response?.products', response);
      setProductDetails(response);
    };
    fetchData();
  }, [productId]);

  return (
    <View style={styles.container}>
      <View style={styles.flatStyle}>
        <Image
          style={styles.imgStyle}
          source={{uri: productDetails?.thumbnail}}
        />
        <View style={styles.bodyStyle}>
          <View style={styles.innerBox}>
            <Text style={styles.textTitle}>{productDetails?.brand}</Text>
            <Text style={styles.textStyle}>{productDetails?.price}$</Text>
          </View>
          <Text>{productDetails?.description}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => {}} style={styles.btn}>
            <Text style={styles.btnTitle}>Share Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgStyle: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  bodyStyle: {
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  btn: {
    backgroundColor: '#797ee630',
    padding: 20,
    borderRadius: 10,
  },
  btnTitle: {
    color: '#797ee6',
    fontSize: 20,
    textAlign: 'center',
  },
});
