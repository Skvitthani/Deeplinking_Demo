import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

const FireStorageScreen = () => {
  const onDocumentPress = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        copyTo: 'cachesDirectory',
      });

      const docPath = doc[0].fileCopyUri;
      const docName = doc[0].name;

      const reference = storage().ref();

      const task = reference.child('/document/' + docName).putFile(docPath);
      task.on('state_changed', async onSnap => {
        const imageUrl = await storage()
          .ref(onSnap?.ref?.fullPath)
          .getDownloadURL();

        const percentage = calculatePercentage(
          onSnap?.bytesTransferred,
          onSnap?.totalBytes,
        );
      });
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('user Cancel Document picker', error);
      } else {
        console.log('error ::', error);
      }
    }
  };

  function calculatePercentage(currentSize, totalSize) {
    if (totalSize === 0) {
      return 0; // To avoid division by zero
    }
    return (currentSize / totalSize) * 100;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={onDocumentPress}>
        <Text style={styles.uploadText}>Upload Document</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FireStorageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  uploadButton: {
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: '#29ADB2',
  },
  uploadText: {
    color: 'white',
  },
});
