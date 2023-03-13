import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Component/Header';
import Color from '../../Constants/Color';

const PersonalDetails = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  const [personalDetail, setPersonalDetail] = useState({
    name: '',
    email: '',
    phoneNo: '',
  });
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
            title="Settings"
          />
          <Text
            style={{
              color: Color.mainColor,
              fontSize: 22,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Personal Details
          </Text>
          {/* Email */}
          <View style={{marginHorizontal: 5, marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Name
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 5,
            }}>
            <TextInput
              placeholder="Name"
              onChangeText={e =>
                setPersonalDetail({...personalDetail, name: e})
              }
              style={{
                width: Dimensions.get('window').width / 1.21,
                padding: 12,
              }}
            />
          </View>
          <View style={{marginHorizontal: 5, marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Email
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 5,
            }}>
            <TextInput
              placeholder="Email"
              onChangeText={e =>
                setPersonalDetail({...personalDetail, email: e})
              }
              style={{
                width: Dimensions.get('window').width / 1.21,
                padding: 12,
              }}
            />
          </View>
          <View style={{marginHorizontal: 5, marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Phone Number
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 5,
            }}>
            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              onChangeText={e =>
                setPersonalDetail({...personalDetail, phoneNo: e})
              }
              style={{
                width: Dimensions.get('window').width / 1.21,
                padding: 12,
              }}
            />
          </View>
          {/* Login Button */}
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 5,
              marginVertical: 20,
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
                  fontSize: 18,
                  fontFamily: 'Poppins-Regular',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({});
