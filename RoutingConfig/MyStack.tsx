import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import 'react-native-gesture-handler';
import MyDrawer from './MyDrawer';
import SplashScreen from '../Screens/SplashScreen';
import Notification from '../Screens/Notification';
import Categories from '../Screens/Categories';
import CreatorsScreen from '../Screens/CreatorsScreen';
import ComediansScreen from '../Screens/ComediansScreen';
import MusicScreen from '../Screens/MusicScreen';
import ActorsScreen from '../Screens/ActorsScreen';
import MentorsScreen from '../Screens/MentorsScreen';
import AnchorsScreen from '../Screens/AnchorsScreen';
import SportsScreen from '../Screens/SportsScreen';
import TiktokScreen from '../Screens/TiktokScreen';
import ForgotPassword from '../Screens/ForgotPassword';
import Verification from '../Screens/Verification';
import NewPassword from '../Screens/NewPassword';
import Profile from '../Screens/Profile';
import BookAppointment from '../Screens/BookAppointment';
import ProceedToCheckout from '../Screens/ProceedToCheckout';
import EnrollStar from '../Screens/EnrollStar';
import PersonalDetails from '../Screens/PersonalDetails';
import ChangePassword from '../Screens/ChangePassword';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import TermOfUse from '../Screens/TermOfUse';
import FAQs from '../Screens/FAQs';
import ContactUs from '../Screens/ContactUs';
import AppointmentDetail from '../Screens/AppointmentDetail';
import PendingShouOutDetail from '../Screens/PendingShouOutDetail';
import CompletedShouOutDetail from '../Screens/CompletedShouOutDetail';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="CreatorsScreen" component={CreatorsScreen} />
        <Stack.Screen name="ComediansScreen" component={ComediansScreen} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
        <Stack.Screen name="ActorsScreen" component={ActorsScreen} />
        <Stack.Screen name="MentorsScreen" component={MentorsScreen} />
        <Stack.Screen name="AnchorsScreen" component={AnchorsScreen} />
        <Stack.Screen name="SportsScreen" component={SportsScreen} />
        <Stack.Screen name="TiktokScreen" component={TiktokScreen} />
        <Stack.Screen name="CelebrityProfile" component={Profile} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="ProceedToCheckout" component={ProceedToCheckout} />
        <Stack.Screen name="EnrollStar" component={EnrollStar} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermOfUse" component={TermOfUse} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} />
        <Stack.Screen
          name="PendingShouOutDetail"
          component={PendingShouOutDetail}
        />
        <Stack.Screen
          name="CompletedShouOutDetail"
          component={CompletedShouOutDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
