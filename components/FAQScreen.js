// import React, { Component } from "react";
// import { Picker, View, Text, StyleSheet } from "react-native";

// export  class FAQScreen extends Component {
//   state = {
//       visible:false,
//     // selectedcat: "",
//     // category: [
//     //   {
//     //     itemName: "Samsung M20"
//     //   },
//     //   {
//     //     itemName: "Nokia"
//     //   },
//     //   {
//     //     itemName: "Apple"
//     //   },
//     //   {
//     //     itemName: "Samsung M23"
//     //   },
//     //   {
//     //     itemName: "Samsung M24"
//     //   },
//     //   {
//     //     itemName: "Samsung M25"
//     //   }
//     // ]
//   };

// //   async onValueChangeCat(value) {
// //     this.setState({ selectedcat: value ? OPEN : CLOSE });
// //   }

//   render() {
//     return (
//       <View style={styles.viewStyle}>
//         {/* <View style={{ flex: 0.3 }}>
//           <Text style={styles.textStyle}>Categories</Text>
//         </View>
//         <View style={{ flex: 0.7, fontSize: 14 }}>
//           <Picker

//             itemStyle={styles.itemStyle}
//             mode="dropdown"
//             style={styles.pickerStyle}
//             selectedValue={this.state.selectedcat}
//             onValueChange={this.onValueChangeCat.bind(this)}
//           >
//             {this.state.category.map((item, index) => (
//               <Picker.Item

//                 color="#0087F0"
//                 label={item.itemName}
//                 value={item.itemName}
//                 index={index}
//               />
//             ))}
//           </Picker>
//         </View> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewStyle: {
//     flex: 1,
//     alignSelf: "center",
//     backgroundColor:'red'
//   },
//   itemStyle: {
//     fontSize: 10,
//     fontFamily: "Roboto-Regular",
//     color: "#007aff"
//   },
//   pickerStyle: {
//     width: "100%",
//     height: 40,
//     color: "#007aff",

//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   },
//   textStyle: {
//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   }
// });

// export default FAQScreen

// import React, {Component} from 'react';
// import {Text, TouchableOpacity, View} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// export class FAQScreen extends Component {
//   state = {
//     visible: false,
//   };
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <View
//           style={{
//             width: '80%',
//             borderRadius: 8,
//             borderColor: 'black',
//             borderWidth: 1,
//             padding: 5,
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               borderColor: 'black',
//               borderWidth: 1,
//               borderRadius: 8,
//               paddingVertical: 8,
//               paddingHorizontal: 5,
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//             <Text style={{fontSize: 18, fontWeight: 'bold'}}>Country</Text>

//             {this.state.visible ? (
//               <TouchableOpacity onPress={() => this.setState({visible: false})}>
//                 <AntDesign name="up" size={28} />
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity onPress={() => this.setState({visible: true})}>
//                 <AntDesign name="down" size={28} />
//               </TouchableOpacity>
//             )}
//           </View>
//           {this.state.visible && (
//             <View
//               style={{
//                 margin: 5,
//                 borderColor: 'black',
//                 borderWidth: 1,
//                 borderRadius: 8,
//                 paddingVertical: 8,
//                 paddingHorizontal: 5,
//                 alignItems: 'center',
//               }}>
//               <Text>india</Text>
//               <Text>uk</Text>
//               <Text>china</Text>
//               <Text>usa</Text>
//               <Text>russia</Text>
//               <Text>africa</Text>
//             </View>
//           )}
//         </View>
//       </View>
//     );
//   }
// }

// export default FAQScreen;

// import React, {useState, useEffect} from 'react';
// import {Image, StyleSheet, View, Text} from 'react-native';
// import CompassHeading from 'react-native-compass-heading';

// const FAQScreen = () => {
//   const [compassHeading, setCompassHeading] = useState(0);

//   useEffect(() => {
//     const degree_update_rate = 3;

//     CompassHeading.start(degree_update_rate, (degree) => {
//       setCompassHeading(degree);
//     });

//     return () => {
//       CompassHeading.stop();
//     };
//   }, []);

//   return (
//     <View
//       style={{
//         backgroundColor: '#30A9DE',
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         alignSelf: 'center',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <View
//         style={{
//           borderRadius: 35,
//           width: 60,
//           height: 60,
//           backgroundColor: '#fff',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Image
//           style={[
//             styles.image,
//             {transform: [{rotate: `${360 - compassHeading}deg`}]},
//           ]}
//           resizeMode="contain"
//           source={require('../assets/compass1.png')}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: '100%',
//   },
// });

// export default FAQScreen;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ReactNativeZoomableView from '@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView';
const FAQScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ReactNativeZoomableView</Text>

      <View
        style={{
          borderWidth: 5,
          flexShrink: 1,
          height: 500,
          width: 310,
          position: 'absolute',
          // zIndex: 99,
        }}>
        <ReactNativeZoomableView
          maxZoom={30}
          // Give these to the zoomable view so it can apply the boundaries around the actual content.
          // Need to make sure the content is actually centered and the width and height are
          // dimensions when it's rendered naturally. Not the intrinsic size.
          // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
          // Therefore, we'll feed the zoomable view the 300x150 size.
          contentWidth={300}
          contentHeight={150}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={{uri: 'https://via.placeholder.com/400x200.png'}}
          />
        </ReactNativeZoomableView>
      </View>
      <View style={{height: 500, width: 310}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            position: 'absolute',
            zIndex: 999,
          }}
          source={{
            uri: 'https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270',
          }}
        />
      </View>
    </View>
  );
};

export default FAQScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

// const homePlace = {
//   description: 'Home',
//   geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
// };
// const workPlace = {
//   description: 'Work',
//   geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
// };

// const FAQScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <GooglePlacesAutocomplete
//           placeholder="Search"
//           minLength={2} // minimum length of text to search
//           autoFocus={false}
//           returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
//           listViewDisplayed="auto" // true/false/undefined
//           fetchDetails={true}
//           renderDescription={(row) => row.description} // custom description render
//           onPress={(data, details = null) => {
//             // 'details' is provided when fetchDetails = true
//             console.log(data);
//             console.log(details);
//           }}
//           setAddressText={() => {
//             return '';
//           }}
//           query={{
//             // available options: https://developers.google.com/places/web-service/autocomplete
//             key: 'AIzaSyACANY3wosVKHENgRVUB_0MmGgW__dRkFA',
//             language: 'en', // language of the results
//           }}
//           styles={{
//             textInputContainer: {
//               width: '100%',
//             },
//             description: {
//               fontWeight: 'bold',
//             },
//             predefinedPlacesDescription: {
//               color: '#1faadb',
//             },
//           }}
//           currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
//           currentLocationLabel="Current location"
//           nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
//           GoogleReverseGeocodingQuery={
//             {
//               // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
//             }
//           }
//           GooglePlacesSearchQuery={{
//             // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
//             rankby: 'distance',
//             types: 'address',
//           }}
//           filterReverseGeocodingByTypes={[
//             'locality',
//             'administrative_area_level_3',
//           ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
//           predefinedPlaces={[homePlace, workPlace]}
//           predefinedPlacesAlwaysVisible={true}
//           debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
//           //renderRightButton={() => <Text>Custom text after the input</Text>}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     paddingTop: 10,
//     backgroundColor: '#ecf0f1',
//   },
//   welcome: {
//     fontSize: 40,
//     textAlign: 'center',
//     margin: 10,
//     color: 'black',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5,
//   },
//   top: {
//     height: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   container2: {
//     height: '75%',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255,255, 0.5)',
//     padding: 1,
//     margin: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: '#0B0B3B',
//   },
//   textoboton: {
//     textAlign: 'center',
//     color: 'black',
//     marginBottom: 5,
//     fontSize: 12,
//   },
// });

// export default FAQScreen;
