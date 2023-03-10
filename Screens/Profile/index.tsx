import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import {COLORS} from '../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Video from 'react-native-video';
const Profile = ({navigation, route}: any) => {
  const data = route.params.data;
  const [user, setUser] = useState(true);
  // console.log('data===>', data.videoLink);
  const [myRating, setMyRating] = useState('');
  const [selectedData, setSelected] = useState([]);
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

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [supportStarOpen, setSupportStarOpen] = useState(false);
  const [supportStarValue, setSupportStarValue] = useState(null);
  const [favourites, setFavourites] = useState(false);
  const servicesData = [
    {
      id: 1,
      label: 'Audio Call (2 min)',
      rs: 'PKR 5,000',
      value: 'Audio Call (2 min)',
    },
    {
      id: 2,
      label: 'Video Call (2 min)',
      rs: 'PKR 10,000',
      value: 'Video Call (2 min)',
    },
    {
      id: 3,
      label: 'Audio Shout-out',
      rs: 'PKR 5,000',
      value: 'Audio Shout-out',
    },
    {
      id: 4,
      label: 'Video Shout-out',
      rs: 'PKR 10,000',
      value: 'Video Shout-out',
    },
    {
      id: 5,
      label: 'Ask a Question',
      rs: 'PKR 2,000',
      value: 'Ask a Question',
    },
  ];
  // servicesData && servicesData.map((e,i)=>{
  //   return(
  //     e.label: {
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           width: Dimensions.get('window').width / 1.5,
  //           justifyContent: 'space-between',
  //           alignItems: 'center',
  //           gap: 20,
  //         }}>
  //         <Text
  //           style={{
  //             color: Color.mainColor,
  //             fontFamily: 'Poppins-Regular',
  //             fontSize: 14,
  //           }}>
  //           Audio Call (2 min){' '}
  //         </Text>
  //         <Text
  //           style={{
  //             color: Color.mainColor,
  //             fontFamily: 'Poppins-Regular',
  //             fontSize: 14,
  //           }}>
  //           PKR 5,000
  //         </Text>
  //       </View>
  //     },
  //   )
  // })

  useEffect(() => {
    let item =
      servicesData &&
      servicesData.length > 0 &&
      servicesData.map((e, i) => {
        let data = {
          label: (
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('window').width / 1.5,
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 20,
              }}>
              <Text
                style={{
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}>
                {e.label}
              </Text>
              <Text
                style={{
                  color: Color.mainColor,
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                }}>
                {e.rs}
              </Text>
            </View>
          ),
          value: e.value,
        };
        return data;
      });
    setItems(item);
  }, []);

  const [items, setItems]: any = useState([
    {
      label: (
        <View
          style={{
            flexDirection: 'row',
            width: Dimensions.get('window').width / 1.5,
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
          }}>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            Audio Call (2 min){' '}
          </Text>
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            PKR 5,000
          </Text>
        </View>
      ),
      value: 'AudioCall-2min',
    },
  ]);

  // console.log('valueitem', value);

  const [supportStarItems, setSupportStarItems]: any = useState([
    {
      icon: () => <Entypo name="dot-single" size={25} />,
      label: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
          }}>
          <Image
            source={require('../../Images/coffee.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            PKR 5,000
          </Text>
        </View>
      ),
      value: 'AudioCall-2min',
    },
    {
      icon: () => <Entypo name="dot-single" size={25} />,
      label: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
          }}>
          <Image
            source={require('../../Images/bike.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
          <Text
            style={{
              color: Color.mainColor,
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
            }}>
            PKR 5,000
          </Text>
        </View>
      ),
      value: 'AudioCall-2min',
    },
  ]);

  console.log(data.videoLink, 'link');

  useEffect(() => {
    value &&
      servicesData.length > 0 &&
      servicesData.map((e: any, i) => {
        if (e.value == value) {
          setSelected(e);
        }
      });
  }, [value]);

  console.log(selectedData, 'selected');

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
              {data.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            top: -140,
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
        <View style={{marginHorizontal: 10, top: -120}}>
          {/* Dropdown */}
          <View style={{zIndex: 100}}>
            <DropDownPicker
              placeholder="Select Service"
              placeholderStyle={{
                color: Color.mainColor,
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          {/* Book Appointment */}
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
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('BookAppointment', {data: data})
              }
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
                Book Appointment
              </Text>
            </TouchableOpacity>
          </View>
          {/* Support Your Star */}
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <View
              style={{zIndex: 2, width: Dimensions.get('window').width / 1.25}}>
              <DropDownPicker
                placeholder="Support Your Star"
                placeholderStyle={{
                  color: Color.mainColor,
                }}
                showArrowIcon={true}
                selectedItemLabelStyle={{
                  fontWeight: 'bold',
                  color: Color.mainColor,
                }}
                open={supportStarOpen}
                value={supportStarValue}
                items={supportStarItems}
                setOpen={setSupportStarOpen}
                setValue={setSupportStarValue}
                setItems={setSupportStarItems}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setFavourites(!favourites)}
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Entypo
                name="heart"
                size={25}
                color={favourites ? 'red' : 'grey'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 30,
            top: -120,
          }}></View>
        <View style={{top: -120, marginHorizontal: 10}}>
          <View style={{marginTop: 20}}>
            <Text style={{color: Color.textColor}}>{data.title}</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 30,
            top: -120,
          }}></View>
        {/* Video */}
        <View style={{top: -120, marginHorizontal: 10}}></View>

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

export default Profile;

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
  backgroundVideo: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
    marginBottom: 10,
  },
});
