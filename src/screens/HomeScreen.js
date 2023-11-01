import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getApiData} from '../services/Apis';
import React, {useEffect, useState} from 'react';

const HomeScreen = ({navigation}) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (productData?.length === 0) {
        const response = await getApiData();
        console.log('response?.products', response?.products);
        setProductData(response?.products);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.flatStyle}
        onPress={() => {
          navigation.navigate('Product', {productId: item.id});
        }}>
        <Image style={styles.imgStyle} source={{uri: item.thumbnail}} />
        <View style={styles.footerStyle}>
          <Text style={styles.textStyle}>{item.brand}</Text>
          <Text style={styles.textStyle}>{item.price}$</Text>
        </View>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  };
  const itemSeparatorComponent = () => {
    return <View style={{height: 20}} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id?.toString()}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  flatStyle: {
    margin: 2,
    padding: 8,
    elevation: 2,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    backgroundColor: 'white',
  },
  imgStyle: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  footerStyle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
