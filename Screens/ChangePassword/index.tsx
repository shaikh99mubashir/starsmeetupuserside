import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const ChangePassword = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  const [passwordEye, setPasswordEye] = useState(true);

  const [newPasswordFields, setNewPasswordFields] = useState({
    password: '',
    NewPassword: '',
    OldPassword: '',
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
            Change Password
          </Text>

          <View style={{marginHorizontal: 5, marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Old Password
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 5,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Old Password"
              secureTextEntry={passwordEye ? true : false}
              onChangeText={e =>
                setNewPasswordFields({...newPasswordFields, OldPassword: e})
              }
              style={{
                width: Dimensions.get('window').width / 1.21,
                padding: 12,
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPasswordEye(!passwordEye)}>
              <Text>
                {passwordEye ? (
                  <Icon name="eye" size={25} color="black" />
                ) : (
                  <Icon name="eye-off" size={25} color="black" />
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 5, marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              New Password
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 5,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={passwordEye ? true : false}
              onChangeText={e =>
                setNewPasswordFields({...newPasswordFields, password: e})
              }
              style={{
                width: Dimensions.get('window').width / 1.21,
                padding: 12,
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPasswordEye(!passwordEye)}>
              <Text>
                {passwordEye ? (
                  <Icon name="eye" size={25} color="black" />
                ) : (
                  <Icon name="eye-off" size={25} color="black" />
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 5, marginVertical: 5}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: Color.textColor,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Confirm Password
            </Text>
          </View>
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 10,
              marginHorizontal: 5,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={passwordEye ? true : false}
              onChangeText={e =>
                setNewPasswordFields({...newPasswordFields, NewPassword: e})
              }
              style={{
                width: Dimensions.get('window').width / 1.21,
                padding: 12,
              }}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPasswordEye(!passwordEye)}>
              <Text>
                {passwordEye ? (
                  <Icon name="eye" size={25} color="black" />
                ) : (
                  <Icon name="eye-off" size={25} color="black" />
                )}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Update Button */}
          <View
            style={{
              width: Dimensions.get('window').width / 1.1,
              borderWidth: 1,
              borderRadius: 5,
              marginHorizontal: 5,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {}}
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
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
