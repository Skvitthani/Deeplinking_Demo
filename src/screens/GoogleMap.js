import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';

// const defaultGoogleApiKey = 'AIzaSyAFwTWTLJBx5A1vY8cTvK6PmnE6wMKCT1E';
const origin = {latitude: 21.17024, longitude: 72.831062};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDU62lEtPy2X2G61U6GCh7Q6OPr4Gio0GU';

const GoogleMap = () => {
  return (
    <View style={styles.flexBox}>
      {/* <View style={{marginTop: 50, height: 50}}>
        <GooglePlacesAutocomplete
          placeholder={'Enter location address'}
          minLength={2}
          autoFocus={false}
          returnKeyType={'search'}
          keyboardAppearance={'light'}
          listViewDisplayed="auto"
          fetchDetails={true}
          renderDescription={row => row.description}
          onPress={(data, details = null) => {
            const {formatted_address} = details;
            console.log('data', data);
            console.log('formatted_address', formatted_address);
          }}
          query={{
            key: defaultGoogleApiKey,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          GooglePlacesDetailsQuery={{
            fields: 'formatted_address',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]}
          debounce={200}
        />
      </View> */}
      <MapView
        style={styles.flexBox}
        initialRegion={{
          latitude: 21.17024,
          longitude: 72.831062,
          latitudeDelta: 0.051,
          longitudeDelta: 0.12,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
        {/* <View style={styles.textInputView}>
          <Image source={searchIcone} style={styles.searchImage} />
          <TextInput
            value={inputValue}
            onChangeText={txt => {
              setInputValue(txt);
            }}
            style={styles.textInputStyle}
            placeholder="Serach place"
            placeholderTextColor={'black'}
            autoCapitalize="none"
          />
        </View> */}
        <Marker coordinate={{latitude: 21.17024, longitude: 72.831062}} />
      </MapView>
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
  },
  textInputStyle: {
    flex: 1,
    height: 40,
    fontSize: 20,
    marginLeft: 10,
  },
  textInputView: {
    marginTop: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  searchImage: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  placesAutocompleteContainer: {
    marginTop: 50,
    height: '50%',
    backgroundColor: 'gray',
  },
  placesAutocompleteTextInputContainer: {
    width: '100%',
    backgroundColor: 'red',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  placesAutocompleteTextInput: {
    backgroundColor: 'pink',
    color: 'lightblue',
  },
  placesAutocompletedDescription: {
    fontWeight: '400',
    color: 'blue',
  },
  predefinedPlacesDescription: {
    color: 'green',
  },
  predefinedPlacesPoweredContainer: {
    backgroundColor: 'red',
  },
});
