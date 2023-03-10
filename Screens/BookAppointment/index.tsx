import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BookAppointment = ({navigation, onDateSelect, route}: any) => {
  const data = route.params.data;

  const [user, setUser] = useState(true);
  const [selectedTime, setSelectedTime] = useState(false);

  //   LocaleConfig.locales['fr'] = {
  //     monthNames: [
  //       'January',
  //       'Febuary',
  //       'March',
  //       'April',
  //       'May',
  //       'June',
  //       'July',
  //       'August',
  //       'September',
  //       'October',
  //       'November',
  //       'December',
  //     ],
  //     monthNamesShort: [
  //       'Jan.',
  //       'Feb.',
  //       'Mar',
  //       'Apr',
  //       'May',
  //       'Jun',
  //       'Jly.',
  //       'Aug',
  //       'Sept.',
  //       'Oct.',
  //       'Nov.',
  //       'Dec.',
  //     ],
  //     dayNames: [
  //       'Monday',
  //       'Tuesday',
  //       'Wednesday',
  //       'Thursday',
  //       'Friday',
  //       'Saturday',
  //       'Sunday',
  //     ],
  //     dayNamesShort: ['Sun', 'Mon.', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  //     today: "Aujourd'hui",
  //   };
  //   LocaleConfig.defaultLocale = 'fr';

  const [selectedDate, setSelectedDate] = useState('');
  const onDayPress = (day: any) => {
    const today = new Date();
    const selected = new Date(day.timestamp);

    if (selected >= today) {
      setSelectedDate(day.dateString);
    }
  };
  console.log('selectedDate', selectedDate);
  const [time, setTime]: any = useState([
    {
      id: 1,
      time: `10:00`,
    },
    {
      id: 2,
      time: `11:00`,
    },
    {
      id: 3,
      time: `12:00`,
    },
    {
      id: 4,
      time: `01:00`,
    },
    {
      id: 5,
      time: `02:00`,
    },
    {
      id: 6,
      time: `02:00`,
    },
    {
      id: 7,
      time: `02:00`,
    },
  ]);

  const userSelectedTime = (e: any, i: number) => {
    console.log(e, i, 'eee');
    setTime(
      time &&
        time.length > 0 &&
        time.map((e: any, ind: number) => {
          console.log(ind, 'ind');
          if (i == ind) {
            return {
              ...e,
              selected: e.selected ? false : true,
            };
          } else {
            return {
              ...e,
              selected: false,
            };
          }
        }),
    );
  };
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
      }}>
      <ScrollView>
        <View style={{marginHorizontal: 10}}>
          <Header
            navigation={navigation}
            user={user}
            backBtn={true}
            title="Calendar"
          />
          <Calendar
            onDayPress={onDayPress}
            minDate={`${new Date()}`}
            current={`${new Date()}`}
            markingType="multi-dot"
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: Color.mainColor,
              },
              [new Date().toISOString().slice(0, 10)]: {
                dotColor: Color.mainColor,
                marked: true,
              },
            }}
          />
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 20,
              color: Color.mainColor,
            }}>
            Time Availability
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 10,
            marginHorizontal: 10,
          }}>
          {time &&
            time.map((e: any, i: number) => {
              console.log(e, 'eee');
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => userSelectedTime(e, i)}
                  activeOpacity={0.8}
                  style={{
                    width: Dimensions.get('window').width / 6,
                    height: Dimensions.get('window').height / 16,
                    backgroundColor: e.selected
                      ? Color.mainColor
                      : Color.textColor,
                    padding: 10,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    {e.time}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
        {/* Book Appointment */}
        <View style={{alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderColor: Color.mainColor,
              borderRadius: 5,
              marginHorizontal: 5,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('ProceedToCheckout', {data: data})
              }
              style={{
                alignItems: 'center',
                padding: 10,
                backgroundColor: Color.mainColor,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                }}>
                Proceed to Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
