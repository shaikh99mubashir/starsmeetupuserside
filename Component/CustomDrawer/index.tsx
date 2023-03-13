import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Color from '../../Constants/Color';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomDrawer = (props: any) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: Color.mainColor,
        }}>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Image
            source={require('../../Images/anchors.png')}
            style={{height: 80, width: 80, borderRadius: 5, marginBottom: 10}}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            John Doe
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Color.mainColor,
            paddingTop: 10,
            height: height,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}>
          <DrawerItemList {...props} back />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 5,
          paddingLeft: 15,
          backgroundColor: Color.mainColor,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            props.navigation.navigate('EnrollStar');
          }}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon name="ios-star-half" size={22} color="white" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: 'white',
              }}>
              Enroll as Star
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Icon name="exit-outline" size={22} color="white" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color: 'white',
              }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <Icon name="logo-facebook" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-instagram" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-youtube" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Images/tik.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
