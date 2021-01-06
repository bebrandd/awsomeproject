// _onPressButton () {
//   // Get the data
//   let title = this.state.messageTitle
//   let message = this.state.messageBody

//   // Retrieve the existing messages
//   AsyncStorage.getItem('messages', (res) => {
//     var messages

//     // If this is the first time, set up a new array
//     if (res === null) {
//       messages = []
//     }else {
//       messages = JSON.parse(res)
//     }

//     // Add the new message
//     messages.push({
//       title: title,
//       message: message
//     })

//     // Save the messages
//     AsyncStorage.setItem('messages', JSON.stringify(messages), (res) => {})
//   }
// }

// import React, { Component } from React;
// import { View, TouchableOpacity, Text, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import AsyncStorage from '@react-native-community/async-storage';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isImageAvailable: false,
//             profilePic: null
//         }
//     }

//     componentDidMount = () => {
//         this.getImage();
//     }

//     getImage = async () => {
//         const profilePic = await AsyncStorage.getItem("profilePic");
//         if (profilePic) {
//             this.setState({
//                 isImageAvailable: true,
//                 profilePic: JSON.parse(profilePic)
//             });
//         }
//     }

//     selectProfilePic = () => {
//         const options = {
//             title: 'Select Avatar',
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };

//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 const source = { uri: response.uri };

//                 // You can also display the image using data:
//                 // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//                 AsyncStorage.setItem("profilePic", JSON.stringify(source));
//                 this.setState({
//                     profilePic: source,
//                     isImageAvailable: true
//                 });
//             }
//         });
//     }

//     render() {
//         return (
//             <View>
//                 {
//                     this.state.isImageAvailable && (
//                         <Image source={this.state.profilePic} style={{ width: 200, height: 200 }} />

//                     )
//                 }

//                 {
//                     !this.state.isImageAvailable && (
//                         <TouchableOpacity onPress={this.selectProfilePic}>
//                             <Text>Choose Profile Pic</Text>
//                         </TouchableOpacity>
//                     )
//                 }
//             </View>
//         )
//     }
// }

// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {
//   DrawerItem,
//   createDrawerNavigator,
//   DrawerContentScrollView,
// } from '@react-navigation/drawer';
// import Animated from 'react-native-reanimated';
// import { Feather, AntDesign } from '@expo/vector-icons';
// import { Block, Button, Text } from 'expo-ui-kit';
// import { LinearGradient } from 'expo-linear-gradient';

// // screens
// import Dashboard from '../screens/Dashboard';
// import Messages from '../screens/Messages';
// import Contact from '../screens/Contact';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const Screens = ({ navigation, style }) => {
//   return (
//     <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
//       <Stack.Navigator
//         screenOptions={{
//           headerTransparent: true,
//           headerTitle: null,
//           headerLeft: () => (
//             <Button transparent onPress={() => navigation.openDrawer()}>
//               <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />
//             </Button>
//           ),
//         }}>
//         <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
//         <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
//         <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen>
//       </Stack.Navigator>
//     </Animated.View>
//   );
// };

// const DrawerContent = props => {
//   return (
//     <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
//       <Block>
//         <Block flex={0.4} margin={20} bottom>
//           <Image
//             source={{
//               uri: 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
//               height: 60,
//               width: 60,
//               scale: 0.5,
//             }}
//             resizeMode="center"
//             style={styles.avatar}
//           />
//           <Text white title>
//             React UI Kit
//           </Text>
//           <Text white size={9}>
//             contact@react-ui-kit.com
//           </Text>
//         </Block>
//         <Block>
//           <DrawerItem
//             label="Dashboard"
//             labelStyle={styles.drawerLabel}
//             style={styles.drawerItem}
//             onPress={() => props.navigation.navigate('Home')}
//             icon={() => <AntDesign name="dashboard" color="white" size={16} />}
//           />
//           <DrawerItem
//             label="Messages"
//             labelStyle={{ color: 'white', marginLeft: -16 }}
//             style={{ alignItems: 'flex-start', marginVertical: 0 }}
//             onPress={() => props.navigation.navigate('Messages')}
//             icon={() => <AntDesign name="message1" color="white" size={16} />}
//           />
//           <DrawerItem
//             label="Contact us"
//             labelStyle={{ color: 'white', marginLeft: -16 }}
//             style={{ alignItems: 'flex-start', marginVertical: 0 }}
//             onPress={() => props.navigation.navigate('Contact')}
//             icon={() => <AntDesign name="phone" color="white" size={16} />}
//           />
//         </Block>
//       </Block>

//       <Block flex={false}>
//         <DrawerItem
//           label="Logout"
//           labelStyle={{ color: 'white' }}
//           icon={() => <AntDesign name="logout" color="white" size={16} />}
//           onPress={() => alert('Are your sure to logout?')}
//         />
//       </Block>
//     </DrawerContentScrollView>
//   );
// };

// export default () => {
//   const [progress, setProgress] = React.useState(new Animated.Value(0));
//   const scale = Animated.interpolate(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.8],
//   });
//   const borderRadius = Animated.interpolate(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 16],
//   });

//   const animatedStyle = { borderRadius, transform: [{ scale }] };

//   return (
//     <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#4A00E0']}>
//       <Drawer.Navigator
//         // hideStatusBar
//         drawerType="slide"
//         overlayColor="transparent"
//         drawerStyle={styles.drawerStyles}
//         contentContainerStyle={{ flex: 1 }}
//         drawerContentOptions={{
//           activeBackgroundColor: 'transparent',
//           activeTintColor: 'white',
//           inactiveTintColor: 'white',
//         }}
//         sceneContainerStyle={{ backgroundColor: 'transparent' }}
//         drawerContent={props => {
//           setProgress(props.progress);
//           return <DrawerContent {...props} />;
//         }}>
//         <Drawer.Screen name="Screens">
//           {props => <Screens {...props} style={animatedStyle} />}
//         </Drawer.Screen>
//       </Drawer.Navigator>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   stack: {
//     flex: 1,
//     shadowColor: '#FFF',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,
//     elevation: 5,
//     // overflow: 'scroll',
//     // borderWidth: 1,
//   },
//   drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
//   drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
//   drawerLabel: { color: 'white', marginLeft: -16 },
//   avatar: {
//     borderRadius: 60,
//     marginBottom: 16,
//     borderColor: 'white',
//     borderWidth: StyleSheet.hairlineWidth,
//   },
// });

//import React, { Component } from 'react'
// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

// class Inputs extends Component {
//    state = {
//       email: '',
//       password: ''
//    }
//    handleEmail = (text) => {
//       this.setState({ email: text })
//    }
//    handlePassword = (text) => {
//       this.setState({ password: text })
//    }
//    login = (email, pass) => {
//       alert('email: ' + email + ' password: ' + pass)
//    }
//    render() {
//       return (
//          <View style = {styles.container}>
//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Email"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                onChangeText = {this.handleEmail}/>

//             <TextInput style = {styles.input}
//                underlineColorAndroid = "transparent"
//                placeholder = "Password"
//                placeholderTextColor = "#9a73ef"
//                autoCapitalize = "none"
//                onChangeText = {this.handlePassword}/>

//             <TouchableOpacity
//                style = {styles.submitButton}
//                onPress = {
//                   () => this.login(this.state.email, this.state.password)
//                }>
//                <Text style = {styles.submitButtonText}> Submit </Text>
//             </TouchableOpacity>
//          </View>
//       )
//    }
// }
// export default Inputs

// const styles = StyleSheet.create({
//    container: {
//       paddingTop: 23
//    },
//    input: {
//       margin: 15,
//       height: 40,
//       borderColor: '#7a42f4',
//       borderWidth: 1
//    },
//    submitButton: {
//       backgroundColor: '#7a42f4',
//       padding: 10,
//       margin: 15,
//       height: 40,
//    },
//    submitButtonText:{
//       color: 'white'
//    }
// })

import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
//import Geolocation from '@react-native-community/geolocation';
//import MapView from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export class Location extends Component {
  state = {
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
    //marginBottom: 1,
    categories: [
      {
        name: 'Central Banks',
        icon: (
          <MaterialCommunityIcons
            style={styles.chipsIcon}
            name="bank"
            size={18}
          />
        ),
      },
      {
        name: 'Retail Bank',
        icon: (
          <MaterialCommunityIcons
            name="handshake"
            style={styles.chipsIcon}
            size={18}
          />
        ),
      },
      {
        name: 'Commercial Banks',
        icon: (
          <FontAwesome5
            name="hand-holding-usd"
            style={styles.chipsIcon}
            size={18}
          />
        ),
      },
      {
        name: 'Cooperative Banks',
        icon: (
          <FontAwesome5 name="handshake" style={styles.chipsIcon} size={18} />
        ),
      },
      {
        name: 'Investment Banks',
        icon: (
          <MaterialCommunityIcons
            name="wallet-plus"
            style={styles.chipsIcon}
            size={15}
          />
        ),
      },
      {
        name: 'Savings and Loan Associations',
        icon: (
          <MaterialIcons
            name="monetization-on"
            style={styles.chipsIcon}
            size={15}
          />
        ),
      },
    ],
  };
  componentDidMount() {
    this.findCoordinates();
  }

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        this.setState({coordinate: {latitude, longitude}});
        console.log(position);
      },

      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  // gotToMyLocation() {
  //   console.log('gotToMyLocation is called');
  //   Geolocation.getCurrentPosition(
  //     ({coords}) => {
  //       console.log('curent location: ', coords);
  //       console.log(this.map);
  //       if (this.map) {
  //         console.log('curent location: ', coords);
  //         this.map.animateToRegion({
  //           latitude: coords.latitude,
  //           longitude: coords.longitude,
  //           latitudeDelta: 0.005,
  //           longitudeDelta: 0.005,
  //         });
  //       }
  //     },
  //     (error) => alert('Error: Are location services on?'),
  //     {enableHighAccuracy: true},
  //   );
  // }

  render() {
    let {latitude, longitude} = this.state.coordinate;

    return (
      <View style={styles.container}>
        <MapView
          // ref={(map) => {
          //   this.map = map;
          // }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.container}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={false}
          onPress={(e) => {
            this.setState({
              coordinate: e.nativeEvent.coordinate,
            });
          }}
          // onMapReady={() => {
          //   this.setState({marginBottom: 0});
          // }}
          // onRegionChangeComplete={(region) =>
          //   this.setState({
          //     coordinate: region,
          //   })
          // }
          // onRegionChange={(region) =>
          //   this.setState({
          //     coordinate: region,
          //   })
          // }
        >
          <Marker
            //draggable
            coordinate={this.state.coordinate}
            title="test"
            description="des"
            image={require('../assets/google-maps.png')}
            //onDragEnd={(e) => {
            //console.log('dragEnd', e.nativeEvent.coordinate);
            //}}
          />
        </MapView>

        <View style={styles.searchBox}>
          <Ionicons
            name="ios-location-sharp"
            size={20}
            style={{
              marginVertical: 5,
              marginHorizontal: 5,
              color: '#ff5f2e',
            }}
          />
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{flex: 1, padding: 0}}
          />
          <Ionicons
            name="ios-search"
            size={20}
            style={{
              marginHorizontal: 5,
              marginVertical: 5,
            }}
          />
        </View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}
          // contentInset={
          //   {
          //     // iOS only
          //     // top: 0,
          //     // left: 0,
          //     // bottom: 0,
          //     // right: 20,
          //   }
          // }
          // contentContainerStyle={
          //   {
          //     // paddingRight: Platform.OS === 'android' ? 20 : 0,
          //   }
          // }
        >
          {this.state.categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.chipsItem}>
              {category.icon}
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 0,
          }}>
          <View
            style={{
              flexDirection: 'column',
              //alignContent: 'flex-end',
            }}>
            <View style={styles.crosshairGps}>
              <TouchableOpacity onPress={this.findCoordinates}>
                <MaterialCommunityIcons
                  name="crosshairs-gps"
                  size={25}
                  color="#ff5f2e"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.directions}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="directions"
                  size={25}
                  color="#fff"
                />
                <Text
                  style={{fontSize: 15, textAlign: 'center', color: '#fff'}}>
                  Go
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    top: Platform.OS === 'ios' ? 90 : 80,
    position: 'absolute',
    paddingHorizontal: 10,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 30,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  crosshairGps: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  directions: {
    height: 60,
    width: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
    backgroundColor: '#ff5f2e',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
export default Location;

//// // import React, {Component} from 'react';
// // import {Dimensions, StyleSheet} from 'react-native';
// // import MapView from 'react-native-maps';
// // import MapViewDirections from 'react-native-maps-directions';

// // const GOOGLE_MAPS_APIKEY = 'AIzaSyACANY3wosVKHENgRVUB_0MmGgW__dRkFA';

// // class Location extends Component {
// //   constructor(props) {
// //     super(props);

// //     // AirBnB's Office, and Apple Park
// //     this.state = {
// //       coordinates: [
// //         {
// //           latitude: 37.3317876,
// //           longitude: -122.0054812,
// //         },
// //         {
// //           latitude: 37.771707,
// //           longitude: -122.4053769,
// //         },
// //       ],
// //     };

// //     this.mapView = null;
// //   }

// //   // onMapPress = (e) => {
// //   //   this.setState({
// //   //     coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
// //   //   });
// //   // };

// //   render() {
// //     return (
// //       <MapView
// //         initialRegion={{
// //           latitude: 37.78825,
// //           longitude: -122.4324,
// //           latitudeDelta: 0.015,
// //           longitudeDelta: 0.0121,
// //         }}
// //         style={StyleSheet.absoluteFill}>
// //         <MapView.Marker coordinate={this.state.coordinates[0]} />
// //         <MapView.Marker coordinate={this.state.coordinates[1]} />
// //         <MapViewDirections
// //           origin={this.state.coordinates[0]}
// //           destination={this.state.coordinates[1]}
// //           apikey={GOOGLE_MAPS_APIKEY}
// //           strokeWidth={5}
// //           strokeColor="#0080ff"></MapViewDirections>
// //       </MapView>
// //     );
// //   }
// // }

// // export default Location;

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// let {width, height} = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// export default class Location extends Component {
//   constructor() {
//     super();
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       },
//     };
//   }
//   componentDidMount() {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           region: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           },
//         });
//       },
//       (error) => console.log(error.message),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//     this.watchID = Geolocation.watchPosition((position) => {
//       this.setState({
//         region: {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         },
//       });
//     });
//   }
//   // componentWillUnmount() {
//   //   Geolocation.clearWatch(this.watchID);
//   // }
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           style={styles.container}
//           showsUserLocation={true}
//           region={this.state.region}
//           // onRegionChange={(region) => this.setState({region})}
//           onRegionChangeComplete={(region) => this.setState({region})}>
//           <Marker coordinate={this.state.region} />
//         </MapView>
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 10,
//             right: 0,
//           }}>
//           <View
//             style={{
//               flexDirection: 'column',
//               //alignContent: 'flex-end',
//             }}>
//             <View style={styles.crosshairGps}>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons
//                   name="crosshairs-gps"
//                   size={25}
//                   color="#ff5f2e"
//                 />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.directions}>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons
//                   name="directions"
//                   size={25}
//                   color="#fff"
//                 />
//                 <Text
//                   style={{fontSize: 15, textAlign: 'center', color: '#fff'}}>
//                   Go
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//   },
//   crosshairGps: {
//     height: 60,
//     width: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 100,
//     marginHorizontal: 10,
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#ccc',
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   directions: {
//     height: 60,
//     width: 60,
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 100,
//     marginHorizontal: 10,
//     backgroundColor: '#ff5f2e',
//     shadowColor: '#ccc',
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
// });
