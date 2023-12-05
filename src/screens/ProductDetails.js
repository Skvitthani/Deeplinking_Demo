import {
  Text,
  View,
  Share,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Header from '../components/Header';
import React, {useEffect, useState} from 'react';
import {getSingleProduct} from '../services/Apis';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';

const ProductDetails = ({route}) => {
  const productId = route?.params?.productId;
  const {width} = useWindowDimensions();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSingleProduct(productId);
      setProductDetails(response);
    };
    fetchData();
  }, [productId]);

  const generateLinik = async () => {
    try {
      const link = await dynamicLinks().buildShortLink(
        {
          link: `https://mrdeeplinking.page.link/63fF?${productId}`,
          domainUriPrefix: 'https://mrdeeplinking.page.link',
          android: {
            packageName: 'com.deeplinking',
          },
        },
        dynamicLinks.ShortLinkType.DEFAULT,
      );

      return link;
    } catch (error) {
      console.log('error', error);
    }
  };

  const shareProduct = async () => {
    try {
      const getLink = await generateLinik();
      Share.share({
        message: getLink,
      });
    } catch (error) {
      console.log('Share error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View>
          <Animated.Image
            sharedTransitionTag={productDetails?.brand}
            source={{uri: productDetails?.thumbnail}}
            style={{width: width, height: width}}
            resizeMode={'stretch'}
          />
          <Animated.View
            style={styles.textContainer}
            entering={FadeIn.delay(600)}>
            <Text style={styles.textName}>{productDetails.brand}</Text>
            <Text style={styles.textLocation}>{productDetails.title}</Text>
          </Animated.View>
        </View>
        <Animated.View entering={FadeInDown.delay(800)}>
          <Text style={styles.textAbout}>About</Text>
          <Text style={styles.text}>{productDetails.description}</Text>
        </Animated.View>
      </View>

      <TouchableOpacity
        onPress={() => {
          shareProduct();
        }}
        style={[styles.btn, {width: width * 0.9}]}>
        <Text style={styles.btnTitle}>Share Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#1c6cce',
    padding: 22,
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 20,
  },
  btnTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textLocation: {
    color: 'white',
    fontSize: 16,
  },
  textAbout: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
});
