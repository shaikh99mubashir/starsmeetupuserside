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
import Entypo from 'react-native-vector-icons/Entypo';

const Favourites = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  const [favourites, setFavourites] = useState(false);
  const PendingData = [
    {
      name: 'Hamza',
      type: 'Actor',
      image: require('../../Images/actors.png'),
    },
    {
      name: 'ODho',
      type: 'Anchor',
      image: require('../../Images/actors.png'),
    },
  ];

  const renderPendingData: any = ({item}: any) => {
    return (
      <View style={{marginBottom: 10, justifyContent: 'space-between'}}>
        <View
          style={{
            width: Dimensions.get('window').width / 1.1,
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
                {item.type}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setFavourites(!favourites)}>
            <Entypo
              name="heart"
              size={35}
              color={favourites ? 'red' : 'grey'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 5,
          }}></View>
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
          title="Favourites"
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

export default Favourites;

const styles = StyleSheet.create({});
