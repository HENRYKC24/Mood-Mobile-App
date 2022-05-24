import React from 'react';
import {View, StyleSheet} from 'react-native';
import Date from './Date';

const CalendarRow = ({calendarData, year, journal}) => {
  console.log(calendarData, '^^^^^^^^^');
  return (
    <View style={styles.dateRow}>
      {calendarData.map(data => (
        <Date
          key={Math.random()}
          journal={journal}
          calendarData={data}
          year={year}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dateRow: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    alignItems: 'flex-end',
    marginVertical: '2%',
    // borderWidth: 1,
  },
});

export default CalendarRow;
