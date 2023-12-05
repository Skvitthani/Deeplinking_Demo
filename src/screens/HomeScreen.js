import {Text, View, FlatList, StyleSheet, Pressable} from 'react-native';
import {getApiData} from '../services/Apis';
import React, {useEffect, useRef, useState} from 'react';
import analytics from '@react-native-firebase/analytics';
import Animated, {FadeInDown} from 'react-native-reanimated';

const HomeScreen = ({navigation}) => {
  const [productData, setProductData] = useState([]);
  const [alreadySeen, setAlreadySeen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (productData?.length === 0) {
        const response = await getApiData();
        setProductData(response?.products);
      }
    };
    fetchData();
  }, []);

  const RenderItem = ({item, index}) => {
    return (
      <Animated.View entering={FadeInDown.delay(250 * index)}>
        <Pressable
          style={styles.flatStyle}
          onPress={() => {
            navigation.navigate('Product', {productId: item.id});
          }}>
          <Animated.Image
            source={{uri: item.thumbnail}}
            style={styles.imgStyle}
            resizeMode={'stretch'}
          />
          <View style={styles.textContainer}>
            <Text style={styles.brandTextStyle}>{item.brand}</Text>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </Pressable>
      </Animated.View>
    );
  };
  const itemSeparatorComponent = () => {
    return <View style={{height: 20}} />;
  };

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const items = viewableItems.map(item => item.item);
    setAlreadySeen(pre => {
      if (pre?.length == 0) {
        return items;
      } else {
        const newItems = items.filter(
          item => !pre?.some(seenItem => seenItem.id === item.id),
        );
        return newItems;
      }
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      if (alreadySeen?.length !== 0) {
        try {
          alreadySeen?.map(async item => {
            analytics().logViewItem({
              items: [
                {
                  item_brand: `${item?.brand}`,
                  item_category: `${item?.category}`,
                  item_id: `${item?.id}`,
                  item_name: `${item?.title}`,
                  price: item?.price,
                },
              ],
            });
          });
        } catch (error) {
          console.log('error', error);
        }
      }
    };
    fetchData();
  }, [alreadySeen]);

  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        renderItem={RenderItem}
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
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
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
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    gap: 10,
    margin: 20,
    flexShrink: 1,
    justifyContent: 'center',
  },
  brandTextStyle: {
    fontSize: 28,
    color: '#323232',
    fontWeight: 'bold',
  },
  priceText: {color: '#323232', fontSize: 18},
});
