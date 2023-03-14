import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Color from '../../Constants/Color';
import Header from '../../Component/Header';
import CustomTabView from '../../Component/CustomTabView';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ShoutOutAudio = ({navigation}: any) => {
  const [user, setUser] = useState(true);

  const [currentTab, setCurrentTab]: any = useState([
    {
      index: 0,
      name: 'completed',
      selected: true,
    },
    {
      index: 1,
      name: 'cancelled',
      selected: false,
    },
  ]);
  const PendingShouOut = [
    {
      name: 'Hamza',
      date: '356/6516',
      type: 'Audio',
      time: '20:00',
      image: require('../../Images/actors.png'),
    },
    {
      name: 'ODho',
      date: '356/6516',
      type: 'Audio',
      time: '20:00',
      image: require('../../Images/actors.png'),
    },
  ];
  const CompletedShouOut = [
    {
      name: 'zeeshan',
      date: '356/6516',
      type: 'Audio',
      time: '20:00',
      image: require('../../Images/actors.png'),
      task: 'Completed',
    },
    {
      name: 'ashir',
      date: '356/6516',
      type: 'Audio',
      time: '20:00',
      image: require('../../Images/actors.png'),
      task: 'NoShow',
    },
  ];
  const activateTab = (index: any) => {
    setCurrentTab(
      currentTab &&
        currentTab.length > 0 &&
        currentTab.map((e: any, i: any) => {
          if (e.index == index) {
            return {
              ...e,
              selected: true,
            };
          } else {
            return {
              ...e,
              selected: false,
            };
          }
        }),
    );
  };

  const renderPendingShouOutData: any = ({item}: any) => {
    return (
      <View style={{marginBottom: 10, justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PendingShouOutDetail', item)}
          activeOpacity={0.8}
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderColor: Color.mainColor,
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
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'red',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.type}
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderCompletedShouOutData: any = ({item}: any) => {
    return (
      <View style={{marginBottom: 10, justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CompletedShouOutDetail', item)}
          activeOpacity={0.8}
          style={{
            width: Dimensions.get('window').width / 1.1,
            borderWidth: 1,
            borderColor: Color.mainColor,
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
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'red',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.type}
            </Text>
            <Text
              style={{
                color: Color.textColor,
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              {item.time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const firstRoute = useCallback(() => {
    return (
      <View style={{marginVertical: 20}}>
        <FlatList
          data={PendingShouOut}
          renderItem={renderPendingShouOutData}
          keyExtractor={(items: any, index: number): any => index}
        />
      </View>
    );
  }, []);

  const secondRoute = useCallback(() => {
    return (
      <View style={{marginVertical: 20}}>
        <FlatList
          data={CompletedShouOut}
          renderItem={renderCompletedShouOutData}
          keyExtractor={(items: any, index: number): any => index}
        />
      </View>
    );
  }, []);

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
          title="Shout-out"
        />
        <CustomTabView
          currentTab={currentTab}
          firstRoute={firstRoute}
          secondRoute={secondRoute}
          activateTab={activateTab}
          firstRouteTitle="Pending"
          secondRouteTitle="Completed"
        />
      </View>
    </View>
  );
};

export default ShoutOutAudio;

const styles = StyleSheet.create({});
