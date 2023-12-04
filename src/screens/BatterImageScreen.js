import {
  Modal,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-toast-message';
import BetterImage from 'react-native-better-image';
import ImageZoom from 'react-native-image-pan-zoom';
import {showToast} from '../helper/CommanFunctions';
import {IMAGE_CATEGORIES} from '../helper/DummyImage';
import ActionButton from '../components/ActionButton';
import Animated, {FadeInRight} from 'react-native-reanimated';

const BatterImageScreen = () => {
  const [isModal, setIsModal] = useState(false);
  const [image, setImage] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
        }}
        activeOpacity={0.9}
        onPress={() => {
          setImage(item);
          setIsModal(true);
        }}>
        <BetterImage
          source={{
            uri: item?.url,
          }}
          thumbnailSource={{
            uri: item?.previewUrl,
          }}
          progressiveRenderingEnabled
          viewStyle={styles.imageViewStyle}
        />
      </TouchableOpacity>
    );
  };

  const onDownloadPress = () => {
    let date = new Date();
    let extention = /[.]/.exec(image?.url)
      ? /[^.]+$/.exec(image?.url)
      : undefined;
    extention = '.' + extention[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          extention,
        description: 'Image',
      },
    };

    config(options)
      .fetch('GET', image?.url)
      .then(res => {
        showToast('Image Downloaded Successfully.');
      });
  };

  const ItemSeparatorComponent = () => (
    <View style={{height: 4, backgroundColor: 'black'}} />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList
        style={{alignSelf: 'center'}}
        numColumns={2}
        data={IMAGE_CATEGORIES}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent}
      />

      <Modal
        visible={isModal}
        statusBarTranslucent
        style={{backgroundColor: 'black', flex: 1}}>
        <ImageZoom
          enableSwipeDown
          style={{backgroundColor: 'black'}}
          onSwipeDown={() => setIsModal(false)}
          cropWidth={Dimensions.get('screen').width}
          cropHeight={Dimensions.get('screen').height}
          imageWidth={Dimensions?.get('screen')?.width}
          imageHeight={Dimensions?.get('screen')?.height}>
          <BetterImage
            source={{
              uri: image?.url,
            }}
            thumbnailSource={{
              uri: image?.previewUrl,
            }}
            progressiveRenderingEnabled
            viewStyle={styles.imageViewStyle2}
          />
        </ImageZoom>
        <Toast position="top" />

        <Animated.View entering={FadeInRight.delay(1200)}>
          <ActionButton onDownPress={onDownloadPress} />
        </Animated.View>
      </Modal>
    </View>
  );
};

export default BatterImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageViewStyle: {
    height: 280,
    marginHorizontal: 2,
    borderRadius: 10,
    alignSelf: 'center',
    width: Dimensions?.get('screen')?.width / 2.071,
  },
  imageViewStyle2: {
    alignSelf: 'center',
    width: Dimensions?.get('screen')?.width,
    height: Dimensions?.get('screen')?.height,
  },
});
