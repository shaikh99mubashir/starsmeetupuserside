import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import Sound from 'react-native-sound';
const ProceedToCheckout = ({navigation, route}: any) => {
  const data = route.params.data;
  // console.log('data', data);

  const [user, setUser] = useState(true);
  const currentDate = new Date();

  const currentDateString = currentDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'long',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const [message, setMessage] = useState('');

  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
      }}>
      <ScrollView>
        {/* Header and order NAme */}
        <View style={{marginHorizontal: 10}}>
          <Header
            navigation={navigation}
            user={user}
            backBtn={true}
            title="Checkout"
          />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: Color.textColor,
                fontSize: 16,
              }}>
              Audio Call (2 min)
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: Color.mainColor,
                fontSize: 14,
              }}>
              {currentDateString}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 5,
          }}></View>
        <View style={{marginHorizontal: 10}}>
          {/* Image and name */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              gap: 30,
              width: Dimensions.get('window').width / 2,
            }}>
            <View style={{}}>
              <Image
                source={require('../../Images/Asset34.png')}
                resizeMode="cover"
                style={[
                  styles.pofileImage,
                  {borderRadius: 10, borderColor: 'white', borderWidth: 2},
                ]}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 20,
                marginVertical: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: Color.mainColor,
                  fontSize: 22,
                }}>
                {data.name}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: Color.mainColor,
                  fontSize: 22,
                  textAlign: 'left',
                }}>
                Rs. 5000
              </Text>
            </View>
          </View>
          {/* Promo Code */}
          <View style={{marginHorizontal: 5, marginVertical: 0}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.mainColor,
                fontSize: 20,
              }}>
              Promo Code
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: Dimensions.get('window').width / 1.5,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
              }}>
              <TextInput
                placeholder="Promo Code"
                style={{
                  width: Dimensions.get('window').width / 1.21,
                  padding: 12,
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 4.5,
                borderWidth: 1,
                borderColor: Color.mainColor,
                borderRadius: 10,
                marginHorizontal: 5,
                padding: 5,
                alignItems: 'center',
                backgroundColor: Color.mainColor,
              }}>
              <Text
                style={{
                  padding: 8,
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 10, marginTop: 20}}>
          <TextInput
            placeholder="Type your message here"
            value={message}
            onChangeText={setMessage}
            style={{borderWidth: 1, borderRadius: 10}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProceedToCheckout;

const styles = StyleSheet.create({
  pofileImage: {
    height: Dimensions.get('window').height / 4.5,
    width: Dimensions.get('window').width / 2.8,
  },
});
