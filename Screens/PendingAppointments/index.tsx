import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header';
import Color from '../../Constants/Color';

const PendingAppointments = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  const PendingData = [
    {
      name: 'Hamza',
      date: '356/6516',
      type: 'Audio Call',
      time: '20:00',
      image: require('../../Images/actors.png'),
    },
    {
      name: 'ODho',
      date: '356/6516',
      type: 'Audio Call',
      time: '20:00',
      image: require('../../Images/actors.png'),
    },
  ];

  const renderPendingData: any = ({item}: any) => {
    return (
      <View style={{marginBottom: 10, justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppointmentDetail', item)}
          activeOpacity={0.8}
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderColor: Color.mainColor,
            borderRadius: 5,
            marginHorizontal: 5,
            paddingVertical: 5,
            paddingHorizontal: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{width: 65, height: 65, borderRadius: 10}}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: Color.mainColor,
                  fontSize: 18,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: Color.textColor,
                  fontSize: 14,
                }}>
                {item.date}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'red',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.type}
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.time}
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginTop: 10,
            justifyContent: 'flex-end',
          }}>
          {/* Refund Button */}
          <View
            style={{
              width: Dimensions.get('window').width / 3,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: Color.mainColor,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 10,
                backgroundColor: Color.mainColor,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                }}>
                Refund
              </Text>
            </TouchableOpacity>
          </View>
          {/* Reschedule */}
          <View
            style={{
              width: Dimensions.get('window').width / 3,
              borderWidth: 1,
              borderColor: Color.mainColor,
              borderRadius: 5,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                padding: 10,
                backgroundColor: Color.mainColor,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontFamily: 'Poppins-Regular',
                }}>
                Reschedule
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
      }}>
      <View style={{marginHorizontal: 10}}>
        <Header
          navigation={navigation}
          user={user}
          backBtn={true}
          title="Pending Appointments"
        />

        <View style={{marginVertical: 20}}>
          <FlatList
            data={PendingData}
            renderItem={renderPendingData}
            keyExtractor={(items: any, index: number): any => index}
          />
        </View>
      </View>
    </View>
  );
};

export default PendingAppointments;

const styles = StyleSheet.create({});
