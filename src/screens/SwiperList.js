import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SwiperList = () => {
  const [listData, setListData] = useState(
    Array(25)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `Item ${++i}`})),
  );
  const [showRow, setShowRow] = useState(false);

  const closeItem = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteItem = (rowMap, rowKey) => {
    closeItem(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onItemOpen = () => {
    setShowRow(!showRow);
  };

  const renderItem = data => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.rowFront}
      underlayColor={'#fff'}>
      <View>
        <Text style={styles.list}>
          This Is {data.item.text} Of Swipe List View
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = (data, rowMap) => (
    <>
      {showRow ? (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.actionButton, styles.closeBtn]}
            onPress={() => closeItem(rowMap, data.item.key)}>
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.deleteBtn]}
            onPress={() => deleteItem(rowMap, data.item.key)}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-150}
        onRowOpen={onItemOpen}
        onRowClose={onItemOpen}
      />
    </View>
  );
};

export default SwiperList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    color: '#FFF',
  },
  btnText: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'lightcoral',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  actionButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  closeBtn: {
    backgroundColor: 'blue',
    right: 75,
  },
  deleteBtn: {
    backgroundColor: 'red',
    right: 0,
  },
});
