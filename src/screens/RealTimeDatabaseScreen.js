import InputText from '../components/InputText';
import React, {useEffect, useState} from 'react';
import ButtonConst from '../components/ButtonConst';
import database from '@react-native-firebase/database';
import {generateRandomId, showToast} from '../helper/CommanFunctions';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RealTimeDatabaseScreen = () => {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [userData, setUserData] = useState([]);
  const [userIndex, setUserIndex] = useState('');
  const [editPress, setEditPress] = useState(false);

  const onAddDataPress = () => {
    const randomId = generateRandomId();

    database()
      .ref(`/users/${randomId}`)
      .set({
        age: age,
        name: name,
        id: randomId,
      })
      .then(() => console.log('Data set.'));
  };

  useEffect(() => {
    const onChildAdd = database()
      .ref('/users')
      .on('value', snapshot => {
        console.log('snapshot on add data ----', snapshot.val());
        setUserData([]);
        snapshot.forEach(val => {
          setUserData(userData => [...userData, val.val()]);
        });
      });
    const onChildDelete = database()
      .ref('/users')
      .on('child_removed', snapshot => {
        console.log('snapshot on Remove Data ----', snapshot.val());
        showToast(`${snapshot.val().name} Deleted`);
      });
    const onChildUpdate = database()
      .ref('/users')
      .on('child_changed', snapshot => {
        console.log('snapshot on Update Data ----', snapshot.val());
        showToast(`${snapshot.val().name} Updated`);
      });
    return () => {
      database().ref('/users').off('value', onChildAdd);
      database().ref('/users').off('child_removed', onChildDelete);
      database().ref('/users').off('child_changed', onChildUpdate);
    };
  }, []);

  const UserDataList = ({item, index}) => {
    return (
      <View style={styles.userListView} key={index}>
        <View style={{flex: 2}}>
          <Text style={styles.textStyle}>Name :: {item?.name}</Text>
          <Text style={styles.textStyle}>Age :: {item?.age}</Text>
        </View>
        <View style={styles.buttonView}>
          <ButtonConst
            title={'Edit'}
            onPress={() => {
              onEditPress(item);
            }}
          />
          <ButtonConst
            title={'Delete'}
            onPress={() => {
              onDeletePress(item);
            }}
          />
        </View>
      </View>
    );
  };

  const onEditPress = item => {
    setEditPress(true);
    setUserIndex(item?.id);
    setName(item?.name);
    setAge(item?.age);
  };
  const onDeletePress = async item => {
    await database().ref(`/users/${item?.id}`).remove();
  };

  const onUpdatePress = () => {
    database()
      .ref(`/users/${userIndex}`)
      .update({
        age: age,
        name: name,
      })
      .then(() => {
        setAge('');
        setName('');
        setEditPress(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <InputText
          placeholder={'Enter Name..'}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
        />
        <InputText
          placeholder={'Enter Age..'}
          value={age}
          onChangeText={txt => {
            setAge(txt);
          }}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.addDataButton,
          {backgroundColor: editPress ? '#29ADB2' : '#E1AA74'},
        ]}
        onPress={!editPress ? onAddDataPress : onUpdatePress}>
        <Text style={styles.addDataText}>
          {editPress ? 'Update Data' : 'Add Data'}
        </Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={userData}
        renderItem={UserDataList}
      />
    </View>
  );
};

export default RealTimeDatabaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  addDataButton: {
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  addDataText: {
    color: 'white',
  },
  inputView: {
    marginTop: 10,
  },
  userListView: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#A2C579',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'black',
    fontWeight: '800',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noDataText: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
