import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header';
import Color from '../../Constants/Color';
import Video from 'react-native-video';

const AppointmentDetail = ({navigation, route}: any) => {
  const data = route.params;
  const [user, setUser] = useState(true);

  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 10}}>
          <Header
            navigation={navigation}
            user={user}
            backBtn={true}
            title="Details"
          />
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Images/Asset34.png')}
              resizeMode="cover"
              style={[
                styles.pofileImage,
                {borderRadius: 10, borderColor: 'white', borderWidth: 2},
              ]}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: Color.mainColor,
                fontSize: 24,
              }}>
              {data.name}
            </Text>
            {/* Join Meeting Button */}
            <View
              style={{
                width: Dimensions.get('window').width / 1.5,
                borderWidth: 1,
                borderRadius: 5,
                marginHorizontal: 5,
                marginVertical: 20,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
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
                  Join Meeting
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginHorizontal: 10}}>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: Color.mainColor,
                  fontSize: 22,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Instructions
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text
              style={{
                marginTop: 10,
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
              }}>
              This is Ashir. I have certain rules for communication. i am
              expecting a nice session.
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 5,
          }}></View>
        {/* Service Detail */}
        <View style={{marginHorizontal: 15}}>
          <View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: Color.mainColor,
                  fontSize: 22,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Service Details
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Order#135698
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Service Type : Audio Call
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Service Time : 04:20 PM
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Date: 11/01/2023
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Payment Details
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Card Number: **** **** ****6311
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Paid Amount : Rs 6000
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Payment Type: Credit Card
              </Text>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Paid on 11th Jan 2023 3:00 PM
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 5,
          }}></View>

        {/* Service Detail */}
        <View style={{marginHorizontal: 15}}>
          <View>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: Color.mainColor,
                  fontSize: 22,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                How to Join Meeting
              </Text>
            </View>
          </View>
        </View>

        <Video
          source={{
            uri: 'https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-for-Testing.mp4',
          }} // Can be a URL or a local file.
          repeat={true}
          controls={true}
          onLoad={load => console.log(load, 'load')} // Store reference
          onError={error => console.log(error, 'error')} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
      </ScrollView>
    </View>
  );
};

export default AppointmentDetail;

const styles = StyleSheet.create({
  pofileImage: {
    height: Dimensions.get('window').height / 3.1,
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
  },
  backgroundVideo: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
    marginBottom: 10,
  },
});
