import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import {COLORS} from '../../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import DropDownPicker from 'react-native-dropdown-picker';
import Video from 'react-native-video';
const Profile = ({navigation, route}: any) => {
  const data = route.params.data;
  const [user, setUser] = useState(true);
  const [myRating, setMyRating] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [favourites, setFavourites] = useState(false);
  const [FilterModaldata, setFilterModaldata]: any = useState([]);
  const [selectedServicedata, setSelectedServicedata]: any = useState([]);
  const [serviceDD, setServiceDD] = useState(false);
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

  // const servicesData = [
  //   {
  //     id: 1,
  //     label: 'Audio Call (2 min)',
  //     rs: 'PKR 5,000',
  //     value: 'Audio Call (2 min)',
  //   },
  //   {
  //     id: 2,
  //     label: 'Video Call (2 min)',
  //     rs: 'PKR 10,000',
  //     value: 'Video Call (2 min)',
  //   },
  //   {
  //     id: 3,
  //     label: 'Audio Shout-out',
  //     rs: 'PKR 5,000',
  //     value: 'Audio Shout-out',
  //   },
  //   {
  //     id: 4,
  //     label: 'Video Shout-out',
  //     rs: 'PKR 10,000',
  //     value: 'Video Shout-out',
  //   },
  //   {
  //     id: 5,
  //     label: 'Ask a Question',
  //     rs: 'PKR 2,000',
  //     value: 'Ask a Question',
  //   },
  // ];
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

  // useEffect(() => {
  //   let item =
  //     servicesData &&
  //     servicesData.length > 0 &&
  //     servicesData.map((e, i) => {
  //       let data = {
  //         label: (
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               width: Dimensions.get('window').width / 1.5,
  //               justifyContent: 'space-between',
  //               alignItems: 'center',
  //               gap: 20,
  //             }}>
  //             <Text
  //               style={{
  //                 color: Color.mainColor,
  //                 fontFamily: 'Poppins-Regular',
  //                 fontSize: 14,
  //               }}>
  //               {e.label}
  //             </Text>
  //             <Text
  //               style={{
  //                 color: Color.mainColor,
  //                 fontFamily: 'Poppins-Regular',
  //                 fontSize: 14,
  //               }}>
  //               {e.rs}
  //             </Text>
  //           </View>
  //         ),
  //         value: e.value,
  //       };
  //       return data;
  //     });
  //   setItems(item);
  // }, []);

  // const [items, setItems]: any = useState([
  //   {
  //     label: (
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
  //     ),
  //     value: 'AudioCall-2min',
  //   },
  // ]);

  // useEffect(() => {
  //   value &&
  //     servicesData.length > 0 &&
  //     servicesData.map((e: any, i) => {
  //       if (e.value == value) {
  //         setSelected(e);
  //       }
  //     });
  // }, [value]);

  // console.log(selectedData, 'selected');

  const [modalVisible, setModalVisible] = useState(false);

  const handleProfileImagePress = () => {
    console.log('hello world');
    setModalVisible(true);
  };

  console.log('hello world');

  const handleCloseModal = () => {
    console.log('Modal Close');
    setModalVisible(false);
  };

  const SelectService = [
    {
      id: 1,
      service: 'Audio Call (2 min) PKR 5000',
    },
    {
      id: 2,
      service: 'Video Call (2 min) PKR 10000',
    },
  ];
  const SupportYourStar = [
    {
      id: 1,
      name: 'PKR 5000',
      image: require('../../Images/coffee.png'),
    },
    {
      id: 2,
      name: 'PKR 10000',
      image: require('../../Images/bike.png'),
    },
  ];

  const SelectedSupportStar = (item: any) => {
    console.log(item);
    setFilterModaldata(item);
    setShowDropDown(!showDropDown);
  };

  const SelectedServices = (item: any) => {
    console.log(item);
    setSelectedServicedata(item);
    setServiceDD(!serviceDD);
  };

  const modal = useCallback(() => {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Image
            source={require('../../Images/Asset34.png')}
            resizeMode="contain"
            style={{width: Dimensions.get('window').width}}
          />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: Color.mainColor,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 100,
            }}
            onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }, [modalVisible]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(modalVisible, 'visivle');
  const handleImagePress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
        height: Dimensions.get('window').height,
      }}>
      <View>{modalVisible && modal()}</View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleProfileImagePress}>
            <Image
              source={require('../../Images/Asset34.png')}
              resizeMode="cover"
              style={[
                styles.coverImage,
                {borderBottomLeftRadius: 50, borderBottomRightRadius: 50},
              ]}
            />
          </TouchableOpacity>
          <View style={{position: 'absolute', left: 10, top: 10}}>
            <Header
              navigation={navigation}
              user={user}
              backBtn
              noLogo
              style={styles.HeaderStyle}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleProfileImagePress}
            style={{alignItems: 'center', top: -140}}>
            <Image
              source={require('../../Images/Asset34.png')}
              resizeMode="cover"
              style={[
                styles.pofileImage,
                {borderRadius: 10, borderColor: 'white', borderWidth: 2},
              ]}
            />
          </TouchableOpacity>
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
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '95%',
              }}>
              <TouchableOpacity
                onPress={() => setServiceDD(!serviceDD)}
                style={{
                  marginHorizontal: 20,
                  marginTop: -10,
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: 10,
                  borderRadius: 8,
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  borderWidth: 1,
                }}>
                {selectedServicedata &&
                Object.keys(selectedServicedata).length > 0 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={{color: 'black'}}>
                      {selectedServicedata.service}
                    </Text>
                    {serviceDD ? (
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
                    )}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={{color: Color.mainColor}}>Select Service</Text>
                    {serviceDD ? (
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          {serviceDD == true &&
            SelectService.map((item, index) => (
              <TouchableOpacity
                onPress={() => SelectedServices(item)}
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  marginVertical: 5,
                  gap: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.mainColor,
                  }}>
                  {item.service}
                </Text>
              </TouchableOpacity>
            ))}
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
              onPress={
                () => navigation.navigate('BookAppointment', {data: data})
                // console.log('run')
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
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: Dimensions.get('window').width / 1.3,
              }}>
              <TouchableOpacity
                onPress={() => setShowDropDown(!showDropDown)}
                style={{
                  marginHorizontal: 20,
                  marginTop: -10,
                  alignItems: 'center',
                  alignSelf: 'center',
                  padding: 10,
                  borderRadius: 8,
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  borderWidth: 1,
                }}>
                {FilterModaldata && Object.keys(FilterModaldata).length > 0 ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={{color: 'black'}}>{FilterModaldata.name}</Text>
                    {showDropDown ? (
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
                    )}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <Text style={{color: Color.mainColor}}>
                      Support Your Star
                    </Text>
                    {showDropDown ? (
                      <Icon name="chevron-up-sharp" size={20} color="black" />
                    ) : (
                      <Icon name="chevron-down-sharp" size={20} color="black" />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setFavourites(!favourites)}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: -10,
                alignSelf: 'center',
                padding: 10,
                height: 50,
                justifyContent: 'center',
              }}>
              <Entypo
                name="heart"
                size={25}
                color={favourites ? 'red' : 'grey'}
              />
            </TouchableOpacity>
          </View>
          {showDropDown == true &&
            SupportYourStar.map((item, index) => (
              <TouchableOpacity
                onPress={() => SelectedSupportStar(item)}
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  marginVertical: 5,
                  gap: 10,
                }}>
                <Entypo name="dot-single" size={25} />
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />

                <Text
                  style={{
                    fontSize: 16,
                    color: COLORS.mainColor,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCCCCC',
            marginTop: 30,
            top: -120,
          }}></View>
        {/* about Star */}
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

        {/* {modalVisible && modal()} */}

        {/* Video */}
        {/* <View style={{top: -100, marginHorizontal: 10}}></View> */}
        <View style={{top: -50}}>
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
        </View>
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

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
  },
});
