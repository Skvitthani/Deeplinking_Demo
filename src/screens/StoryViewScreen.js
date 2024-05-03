import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {Footer, MultiStory} from 'react-native-story-view';
import stories from '../helper/DummyStoryViewData';

const StoryViewScreen = () => {
  const index = 0;

  const viewedStories = useRef(
    Array(stories[index].stories.length)
      .fill(stories[index].stories)
      .map((item, index) => item[index].isSeen ?? false),
  );

  const multiStoryRef = useRef(null);
  return (
    <View style={styles.container}>
      <MultiStory
        stories={stories}
        ref={multiStoryRef}
        avatarProps={{
          userNameStyle: {fontSize: 16},
        }}
        storyContainerProps={{
          renderFooterComponent: ({}) => (
            <Footer
              sendIconProps={{
                source: require('../assets/images/chevron.png'),
                style: {height: 50, width: 50},
              }}
            />
          ),
          renderCustomView: ({}) => (
            <View
              style={{
                position: 'absolute',
                top: 40,
                right: 50,
              }}>
              <Text style={{color: '#fff'}}>dfc</Text>
            </View>
          ),
          footerView: ({}) => (
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'red',
                top: 100,
              }}>
              <Text style={{color: '#fff'}}>dfc</Text>
            </View>
          ),
        }}
      />
    </View>
  );
};

export default StoryViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
