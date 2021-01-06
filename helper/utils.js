import AsyncStorage from "@react-native-async-storage/async-storage"

const SAVE_REGISETR_DATA = 'SAVE_REGISETR_DATA';
//saving register data
export const saveRegisterData = async (data) => {
  const existArray = await getRegisterData()
  existArray.push(data)
  const jsonData = JSON.stringify(existArray);
  await AsyncStorage.setItem('SAVE_REGISETR_DATA', jsonData)
  console.log('jsondata', jsonData)
}
//get register data
export const getRegisterData = async () => {
  const jsonValue = await AsyncStorage.getItem('SAVE_REGISETR_DATA')
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

// colors
const SAVE_COLORS_DATA = 'SAVE_COLORS_DATA';
//saving register data
export const saveColor =  (data) => {

  const jsonData = JSON.stringify(data);
   AsyncStorage.setItem(SAVE_COLORS_DATA, jsonData)
  //console.log('jsondata', jsonData)
}
//get register data
export const getColor = async () => {
  const jsonValue = await AsyncStorage.getItem(SAVE_COLORS_DATA)
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}



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