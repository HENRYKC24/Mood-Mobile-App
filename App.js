/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Calendar from './components/screens/Calendar';

const App = () => {
  const journal = [
    {
      mood: 'bad',
      date: 1,
    },
    {
      mood: 'good',
      date: 4,
    },
    {
      mood: 'okay',
      date: 6,
    },
    {
      mood: 'good',
      date: 19,
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.app}>
        <Calendar journal={journal} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    height: '100%',
  },
});

export default App;
