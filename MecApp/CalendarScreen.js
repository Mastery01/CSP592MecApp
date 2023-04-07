aimport React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ListItem } from 'react-native-elements';

LocaleConfig.locales['en'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun.','Mon.','Tue.','Wed.','Thu.','Fri.','Sat.'],
};
LocaleConfig.defaultLocale = 'en';

const events = [
  {
    date: '2023-04-01',
    title: 'First Event',
    description: 'This is the first event.',
  },
  {
    date: '2023-04-15',
    title: 'Second Event',
    description: 'This is the second event.',
  },
  {
    date: '2023-04-30',
    title: 'Third Event',
    description: 'This is the third event.',
  },
];

function CalendarScreen() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const renderEvent = (event) => {
    return (
      <ListItem key={event.date} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{event.title}</ListItem.Title>
          <ListItem.Subtitle>{event.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={{
          [selectedDate.toISOString().split('T')[0]]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#50cebb',
            selectedTextColor: 'white',
          },
        }}
        onDayPress={(day) => setSelectedDate(new Date(day.timestamp))}
      />
      <View style={styles.eventsContainer}>
        {events
          .filter((event) => event.date === selectedDate.toISOString().split('T')[0])
          .map((event) => renderEvent(event))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventsContainer: {
    flex: 1,
    width:100,
    alignSelf: 'stretch',
    padding: 16,
  },
});

export default CalendarScreen;

