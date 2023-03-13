import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../Component/CustomDrawer';
import Home from '../Screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Setting from '../Screens/Setting';
import Appointments from '../Screens/Appointments';
import PendingAppointments from '../Screens/PendingAppointments';
import ShoutOutAudio from '../Screens/ShoutOutAudio';
import Reviews from '../Screens/Reviews';
import Favourites from '../Screens/Favourites';
import Help from '../Screens/Help';
import Share from '../Screens/Share';
import UserProfile from '../Screens/userProfile';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Poppins-Regular',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home Screen"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UserProfile}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="user" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="settings" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Appointments"
        component={Appointments}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="ios-calendar-sharp" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pending Appointments"
        component={PendingAppointments}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="ios-calendar-sharp" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Shout-out/Audio"
        component={ShoutOutAudio}
        options={{
          drawerIcon: ({color}) => (
            <Entypo name="voicemail" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reviews"
        component={Reviews}
        options={{
          drawerIcon: ({color}) => (
            <Octicons name="code-review" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="favorite" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="information-sharp" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Share"
        component={Share}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="paper-plane" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
