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
      mood: 'bad',
      date: 27,
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
