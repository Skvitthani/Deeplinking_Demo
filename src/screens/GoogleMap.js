import React from 'react';
import {StyleSheet, View} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';

const GoogleMap = () => {
  return (
    <View>
      {/* <MapView
        style={styles.flexBox}
        initialRegion={{
          latitude: 21.17024,
          longitude: 72.831062,
          latitudeDelta: 0.051,
          longitudeDelta: 0.12,
        }}>
        <Marker
          coordinate={{latitude: 21.17024, longitude: 72.831062}}
          title="Heyy"
          description="Hello How are you"
        />
      </MapView> */}
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  flexBox: {
    height: '100%',
    width: '100%',
    // flex: 1,
  },
});
