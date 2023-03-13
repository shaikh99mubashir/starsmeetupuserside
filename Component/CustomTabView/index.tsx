import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Color from '../../Constants/Color';

const CustomTabView = (Props: any): any => {
  const {
    firstRoute,
    secondRoute,
    currentTab,
    activateTab,
    firstRouteTitle,
    secondRouteTitle,
  } = Props;

  const myFirstRoute = () => {
    firstRoute();
  };

  const mySecondRoute = () => {
    secondRoute();
  };

  return (
    <View>
      <View style={{marginBottom: 40}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => activateTab(0)}
            style={{
              width: '45%',
              borderRadius: 10,
              borderWidth: 1,
              marginLeft: 10,
              padding: 10,
              borderColor: Color.textColor,
              backgroundColor:
                currentTab &&
                currentTab.some((e: any, i: any) => e.index == 0 && e.selected)
                  ? Color.mainColor
                  : 'white',
            }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 0 && e.selected,
                    )
                      ? 'white'
                      : Color.textColor,
                },
              ]}>
              {firstRouteTitle}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => activateTab(1)}
            style={{
              width: '45%',
              borderRadius: 10,
              borderWidth: 1,
              marginLeft: 10,
              padding: 10,
              borderColor: Color.textColor,
              backgroundColor:
                currentTab &&
                currentTab.some((e: any, i: any) => e.index == 1 && e.selected)
                  ? Color.mainColor
                  : 'white',
            }}>
            <Text
              style={[
                styles.text,
                {
                  color:
                    currentTab &&
                    currentTab.some(
                      (e: any, i: any) => e.index == 1 && e.selected,
                    )
                      ? 'white'
                      : Color.textColor,
                },
              ]}>
              {secondRouteTitle}
            </Text>
          </TouchableOpacity>
        </View>

        {currentTab &&
        currentTab.length > 0 &&
        currentTab.some((e: any, i: any) => e.index == 0 && e.selected)
          ? firstRoute()
          : secondRoute()}
      </View>
    </View>
  );
};

export default CustomTabView;

const styles = StyleSheet.create({
  text: {
    color: Color.textColor,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
