import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import populateCalendar from '../utils/populateCalendar';
import CalendarRow from '../reusables/CalendarRow';

const Calendar = ({journal}) => {
  const [calendarData, setCalendarData] = useState([]);
  const [inputYear, setInputYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    setCalendarData(populateCalendar(year, 12));
    setInputYear(() => year.toString());
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.parent}>
        <ScrollView>
          <View style={styles.calendar}>
            <View style={styles.weekdays}>
              <Text style={styles.weekday}>Mon</Text>
              <Text style={styles.weekday}>Tue</Text>
              <Text style={styles.weekday}>Wed</Text>
              <Text style={styles.weekday}>Thu</Text>
              <Text style={styles.weekday}>Fri</Text>
              <Text style={styles.weekday}>Sat</Text>
              <Text style={styles.weekday}>Sun</Text>
            </View>
            <View style={styles.rows}>
              {calendarData.map(data => (
                <CalendarRow
                  key={Math.random()}
                  year={inputYear}
                  calendarData={data}
                  journal={journal}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    height: '100%',
  },
  parent: {
    flexGrow: 1,
  },
  calendar: {
    paddingHorizontal: 8,
  },

  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  weekday: {
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: 18,
    width: '14%',
    textAlign: 'center',
  },
  rows: {
    height: '100%',
  },
});

export default Calendar;
