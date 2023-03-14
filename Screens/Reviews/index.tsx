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
import Icon from 'react-native-vector-icons/Ionicons';

const Reviews = ({navigation}: any) => {
  const [user, setUser] = useState(true);
  const PendingData = [
    {
      name: 'Hamza',
      date: '356/6516',
      type: 'Audio Call',
      time: '20:00',
      image: require('../../Images/actors.png'),
    },
    {
      name: 'ODho',
      date: '356/6516',
      type: 'Audio Call',
      time: '20:00',
      image: require('../../Images/actors.png'),
    },
  ];

  const [userRatingStars, setUserRatingStars] = useState([
    {
      rating: 0,
      selected: false,
    },
    {
      rating: 1,
      selected: false,
    },
    {
      rating: 2,
      selected: false,
    },
    {
      rating: 3,
      selected: false,
    },
    {
      rating: 4,
      selected: false,
    },
  ]);
  const [myRating, setMyRating] = useState('');
  const ratingFunction = (e: any): any => {
    setMyRating(e.rating);
    setUserRatingStars(
      userRatingStars.map((rate, i) => {
        if (rate.rating == e.rating) {
          return {
            ...rate,
            selected: true,
          };
        } else {
          return {
            ...rate,
            selected: false,
          };
        }
      }),
    );
  };

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
                {item.date}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: Color.textColor,
                  fontSize: 14,
                }}>
                {item.time}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            {userRatingStars &&
              userRatingStars.map((e, i) => {
                return (
                  <View key={i} style={{alignContent: 'center'}}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => ratingFunction(e)}>
                      <Icon
                        name="star-sharp"
                        size={20}
                        color={
                          userRatingStars.some(
                            (j, ind) => j.selected && e.rating <= j.rating,
                          )
                            ? 'gold'
                            : 'grey'
                        }
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
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
          title="Reviews"
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

export default Reviews;

const styles = StyleSheet.create({});
