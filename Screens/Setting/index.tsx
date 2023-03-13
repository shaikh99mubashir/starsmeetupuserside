import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Setting = ({navigation}: any) => {
  const [user, setUser] = useState(true);

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
          <View style={{gap: 25}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PersonalDetails')}
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 1.1,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <FontAwesome name="user" size={22} color={Color.mainColor} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Color.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Personal Details
                </Text>
              </View>
              <Icon name="chevron-forward" size={22} color={Color.textColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChangePassword')}
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 1.1,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <FontAwesome name="lock" size={22} color={Color.mainColor} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Color.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Change Password
                </Text>
              </View>
              <Icon name="chevron-forward" size={22} color={Color.textColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicy')}
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 1.1,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <FontAwesome
                  name="file-text-o"
                  size={22}
                  color={Color.mainColor}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Color.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Privacy Policy
                </Text>
              </View>
              <Icon name="chevron-forward" size={22} color={Color.textColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TermOfUse')}
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 1.1,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <FontAwesome name="wpforms" size={22} color={Color.mainColor} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Color.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Terms of use
                </Text>
              </View>
              <Icon name="chevron-forward" size={22} color={Color.textColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('FAQs')}
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 1.1,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <FontAwesome
                  name="question-circle-o"
                  size={22}
                  color={Color.mainColor}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Color.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  FAQ<Text>s</Text>
                </Text>
              </View>
              <Icon name="chevron-forward" size={22} color={Color.textColor} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ContactUs')}
              activeOpacity={0.8}
              style={{
                width: Dimensions.get('window').width / 1.1,
                borderWidth: 1,
                borderRadius: 10,
                marginHorizontal: 5,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', gap: 20}}>
                <FontAwesome name="mobile" size={22} color={Color.mainColor} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: Color.textColor,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Contact us
                </Text>
              </View>
              <Icon name="chevron-forward" size={22} color={Color.textColor} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
