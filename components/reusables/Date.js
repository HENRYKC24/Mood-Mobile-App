import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Good from '../../assets/images/good.png';
import Okay from '../../assets/images/okay.png';
import Bad from '../../assets/images/bad.png';
const Date = ({calendarData, journal}) => {
  const journalDates = journal.map(mood => mood.date);
  console.log(journalDates, 'Journal dates');
  let mood = '';
  if (journalDates.includes(calendarData)) {
    const journalData = journal[journalDates.indexOf(calendarData)];
    mood = journalData.mood;
  }
  return calendarData ? (
    <View Text style={styles.date}>
      {mood === 'bad' ? (
        <Image style={styles.image} source={Bad} alt="mood" />
      ) : mood === 'okay' ? (
        <Image style={styles.image} source={Okay} alt="mood" />
      ) : mood == 'good' ? (
        <Image style={styles.image} source={Good} alt="mood" />
      ) : (
        <Text style={styles.emptyImage}></Text>
      )}
      <Text style={styles.text}>{calendarData}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  date: {
    width: '14.285%',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  image: {
    marginBottom: -8,
  },
});

export default Date;
