import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../Constants/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../Component/Header';

const Help = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
        paddingHorizontal: 10,
      }}>
      <Header navigation={navigation} user={user} backBtn={true} title="Help" />
      {/* Email */}
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
          style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
        />
      </View>
      {/* Subject */}
      <View style={{marginHorizontal: 5, marginVertical: 5}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: Color.textColor,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Subject
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
          placeholder="Subject"
          style={{width: Dimensions.get('window').width / 1.21, padding: 12}}
        />
      </View>
      {/* Message */}
      <View style={{marginHorizontal: 5, marginVertical: 5}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: Color.textColor,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Message
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
          placeholder="Message"
          multiline={true}
          style={{
            width: Dimensions.get('window').width / 1.21,
            padding: 12,
          }}
        />
      </View>
      {/* For more help visit FAQS */}
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Icon name="information-sharp" size={25} color="black" />
          <Text
            style={{
              color: Color.textColor,
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            For more help visit FAQS
          </Text>
        </TouchableOpacity>
      </View>
      {/* Send Button */}
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
            Send
          </Text>
        </TouchableOpacity>
      </View>
      {/* For more help contact us on Whatsapp */}
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Icon name="logo-whatsapp" size={25} color="green" />
          <Text
            style={{
              color: Color.textColor,
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            For more help contact us on Whatsapp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({});
