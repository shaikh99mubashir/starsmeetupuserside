import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';

const UserProfile = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
      }}>
      <ScrollView style={{height: '100%'}}>
        <View>
          <Image
            source={require('../../Images/Asset34.png')}
            resizeMode="cover"
            style={[
              styles.coverImage,
              {borderBottomLeftRadius: 50, borderBottomRightRadius: 50},
            ]}
          />
          <View style={{position: 'absolute', left: 10, top: 10}}>
            <Header
              navigation={navigation}
              user={user}
              backBtn
              noLogo
              style={styles.HeaderStyle}
            />
          </View>
          <View style={{alignItems: 'center', top: -140}}>
            <Image
              source={require('../../Images/Asset34.png')}
              resizeMode="cover"
              style={[
                styles.pofileImage,
                {borderRadius: 10, borderColor: 'white', borderWidth: 2},
              ]}
            />
          </View>
          <View style={{alignItems: 'center', top: -140}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: Color.mainColor,
                fontSize: 24,
              }}>
              ODHO
            </Text>
          </View>
        </View>
        <View style={{top: -120, marginHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Color.mainColor,
                fontSize: 22,
                fontFamily: 'Poppins-SemiBold',
              }}>
              About
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{
                    color: Color.viewAll,
                    fontSize: 15,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 5,
            top: -120,
          }}></View>
        <View style={{top: -120, marginHorizontal: 10}}>
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

        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 5,
            top: -100,
          }}></View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  coverImage: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  pofileImage: {
    height: Dimensions.get('window').height / 3.1,
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
  },
  HeaderStyle: {
    top: -60,
  },
});
