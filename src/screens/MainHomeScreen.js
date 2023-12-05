import React from 'react';
import {MotiView} from 'moti';
import ButtonConst from '../components/ButtonConst';
import {FlatList, StyleSheet, View} from 'react-native';

const MainHomeScreen = ({navigation}) => {
  const ScreensData = [
    {name: 'Home', routName: 'Home'},
    {name: 'GoogleMap', routName: 'GoogleMap'},
    {name: 'SwiperList', routName: 'SwiperList'},
    {name: 'Crashlytics Screen', routName: 'CrashlyticsScreen'},
    {name: 'Fire Storage Screen', routName: 'FireStorageScreen'},
    {name: 'Batter Image Screen', routName: 'BatterImageScreen'},
    {name: 'Real Time Database Screen', routName: 'RealTimeDatabaseScreen'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <MotiView
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>
        <ButtonConst
          title={item?.name}
          onPress={() => {
            navigation.navigate(item?.routName);
          }}
        />
      </MotiView>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={ScreensData} renderItem={renderItem} />
    </View>
  );
};

export default MainHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    margin: 10,
    borderRadius: 20,
  },
});
