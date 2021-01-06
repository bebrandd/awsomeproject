import React, {Component} from 'react';
// //import { StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
// // relative path
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import Payment from './components/Payment';
import UserScreen from './components/UserScreen';
import Recent from './components/Recent';
import FAQScreen from './components/FAQScreen';
import HelpAndSupport from './components/HelpAndSupport';
// // icons
// // icons
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import DrawerContent from './components/DrawerContent';
import HistoryScreen from './components/HistoryScreen';
import EditProfileScreen from './components/EditProfile';
import DrawerScreen from './components/DrawerScreen';
import BottomBar from './components/BottomTab';
import Friends from './components/Friends';
import Feedback from './components/Feedback';
import Location from './components/Location';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="FAQScreen" component={FAQScreen} />
        <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="FeedBack" component={Feedback} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabs({style}) {
  return (
    <Animated.View style={[{flex: 1, overflow: 'hidden', elevation: 8}, style]}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Payment" component={Payment} />
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen name="Recent" component={Recent} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </Animated.View>
  );
}

function Home() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <LinearGradient
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#F3F8FE', '#E0E6EA']}>
      {/* <ImageBackground
      source={require('./assets/bkg.jpg')}
      style={{ flex: 1, backgroundColor: "#F8FEFE" }}
    > */}
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{width: '65%', backgroundColor: 'transparent'}}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'green',
          inactiveTintColor: 'green',
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        style={{width: '70%'}}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerScreen {...props} />;
        }}>
        <Drawer.Screen name="DashBoard">
          {(props) => <BottomTabs {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
      {/* </ImageBackground> */}
    </LinearGradient>
  );
}

export default App;
