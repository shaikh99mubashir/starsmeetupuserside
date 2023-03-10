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
import AudioRecord from 'react-native-audio-record';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ProceedToCheckout = ({navigation, route}: any) => {
  const data = route.params.data;
  console.log('data', data);

  const [user, setUser] = useState(true);
  const currentDate = new Date();

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

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

  //   console.log(currentDateString);

  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = async () => {
    const options = {
      sampleRate: 16000,
      channels: 1,
      bitsPerSample: 16,
      wavFile: 'test.wav',
    };

    AudioRecord.init(options);
    AudioRecord.start();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    AudioRecord.stop();
    setIsRecording(false);
  };

  const [duration, setDuration] = useState(0);

  const handleRecordPress = () => {
    setIsRecording(true);
    // Start recording and update duration
  };

  const handleStopPress = () => {
    setIsRecording(false);
    // Stop recording and save audio file
  };

  const handlePlayPress = () => {
    // Start playing audio file
  };

  const handlePausePress = () => {
    // Pause audio playback
  };

  const handleDeletePress = () => {
    // Delete audio file
  };

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
        <View>
          {isRecording ? (
            <Button title="Stop recording" onPress={handleStopRecording} />
          ) : (
            <Button title="Start recording" onPress={handleStartRecording} />
          )}
        </View>

        <View>
          {isRecording ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="mic" size={24} />
              <Text>{duration} sec</Text>
              <TouchableOpacity onPress={handleStopPress}>
                <Icon name="stop" size={24} />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={handleRecordPress}>
              <Icon name="mic" size={64} />
            </TouchableOpacity>
          )}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={handlePlayPress}>
              <Icon name="play-arrow" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePausePress}>
              <Icon name="pause" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDeletePress}>
              <Icon name="delete" size={24} />
            </TouchableOpacity>
          </View>
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
