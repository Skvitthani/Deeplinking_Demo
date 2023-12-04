import React, {useState} from 'react';
import {AnimatePresence, MotiView} from 'moti';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ActionDotButton = ({action, index}) => {
  return (
    <MotiView
      transition={{delay: index * 100, damping: 15, mass: 1}}
      from={{
        opacity: 0,
        translateX: 0,
      }}
      animate={{
        opacity: 1,
        translateX: -65 * (index + 1),
      }}
      exit={{
        opacity: 0,
        translateX: 0,
      }}>
      <Pressable
        onPress={action.onPress}
        style={[
          styles.button,
          {
            backgroundColor: action.color,
            shadowColor: action.color,
            borderColor: action.border,
            opacity: 1,
          },
        ]}>
        <Text style={{fontSize: 18, color: action.color}}>{action.emoji}</Text>
      </Pressable>
    </MotiView>
  );
};

const ActionButton = ({onDownPress}) => {
  const [expanded, setExpanded] = useState(false);

  const actions = [
    {
      type: 'Send',
      color: '#341A34',
      emoji: '⏬',
      border: 'purple',
      bgColor: 'red',
      onPress: () => {
        onDownPress();
      },
    },
    {
      type: 'Scan',
      color: '#16301D',
      emoji: '📸',
      border: 'green',
      bgColor: 'green',
      onPress: () => {},
    },

    {
      type: 'Activity',
      color: '#3B1813',
      emoji: '🌊',
      border: 'red',
      bgColor: 'red',
      onPress: () => {},
    },
  ];

  return (
    <>
      <Pressable
        onPress={() => setExpanded(!expanded)}
        style={[
          styles.button,
          {
            backgroundColor: expanded ? '#2A3EB1' : '#10243E',
            borderColor: expanded ? '#10243E' : 'blue',
            borderWidth: 2,
          },
        ]}>
        <MotiView
          style={{position: 'absolute'}}
          animate={{scale: expanded ? 1.5 : 1}}
          transition={{
            duration: 150,
            type: 'timing',
          }}>
          <Text style={{color: 'white'}}>🎁</Text>
        </MotiView>
      </Pressable>
      <AnimatePresence>
        {expanded && (
          <View style={{position: 'absolute', bottom: 0, right: 0}}>
            {actions.map((action, i) => (
              <ActionDotButton key={i.toString()} action={action} index={i} />
            ))}
          </View>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#111',
    padding: 8,
  },
  button: {
    borderRadius: 100,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
    borderWidth: 2,
  },
});
