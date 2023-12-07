import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {faker} from '@faker-js/faker';
import UserListComp from '../components/UserListComp';

const PractiseScreen = () => {
  const [userData, setUserData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [title, setTitle] = useState('ABCD');

  function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      birthdate: faker.date.birthdate(),
    };
  }

  useEffect(() => {
    if (userData?.length == 0) {
      const USERS = faker.helpers.multiple(createRandomUser, {
        count: 30,
      });
      setUserData(USERS);
      console.log('USERS', USERS?.length);
    }
  }, []);
  console.log('clicked', clicked);

  const onPressOnItem = useCallback(item => {
    setTitle(item?.username);
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={() => setClicked(!clicked)} style={styles.header}>
        {title}
      </Text>
      <FlatList
        data={userData}
        renderItem={({item, index}) => (
          <UserListComp key={index} item={item} onItemPress={onPressOnItem} />
        )}
      />
    </View>
  );
};

export default PractiseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    margin: 20,
    fontSize: 30,
    color: 'white',
  },
});
