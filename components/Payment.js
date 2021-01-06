import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
//import { BorderlessButton } from 'react-native-gesture-handler';
//import Panel from 'react-native-panel';
// import ProgressCircle from 'react-native-progress-circle';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {saveColor} from '../helper/utils';

class Payment extends Component {
  state = {
    data: [
      {color: '#30A9DE', selected: false},
      {color: '#f15c5c', selected: false},
      {color: '#fec9c9', selected: false},
      {color: '#004e66', selected: false},
    ],
  };

  onPressName = (currantColor, currantIndex) => {
    saveColor(currantColor);

    const {data} = this.state;
    let tmpArr = data;
    tmpArr.forEach((ele, index) => {
      if (index == currantIndex) {
        tmpArr[currantIndex].selected = true;
      } else {
        tmpArr[index].selected = false;
      }
    });
    this.setState({data: tmpArr});
  };

  renderView = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-around',
            paddingVertical: 10,
            flexDirection: 'row',
          }}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.flatStyle,
                  {backgroundColor: item.selected ? 'gray' : null},
                ]}
                onPress={() => this.onPressName(item.color, index)}>
                <View
                  style={[styles.innerCircle, {backgroundColor: item.color}]}
                />
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#80d4f6',
            alignItems: 'center',
            height: 50,
            width: '30%',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => this.props.navigation.navigate('Friends')}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderMainview = () => {
    return <View>{this.renderView()}</View>;
  };

  render() {
    return this.renderMainview();
  }
}

//   const[state,setState]=useState({

//   })

//   const color =["#30A9DE","#f15c5c","#fec9c9","#004e66"]
//   const listItem=color.map((val)=>{
//     return(
//         <TouchableOpacity>
//       	    <View style={[styles.innerCircle,{backgroundColor:val}] }/>
//         </TouchableOpacity>
//     )

//   })

//       return(
//         <View>
//           <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,marginHorizontal:20}}>
//             {listItem}

//           </View>

//           <View style={{alignItems:'center',paddingVertical:10}}>
//             <TouchableOpacity style={{backgroundColor:'#fcbe32',height:30,width:'30%',justifyContent:'center',borderRadius:10}}>
//                <Text style={{textAlign:'center'}}>
//                 Next
//                </Text>
//             </TouchableOpacity>
//           </View>

//         </View>

//         )

//   }

//   /*
//   ..######..########.##....##.##.......########
//   .##....##....##.....##..##..##.......##......
//   .##..........##......####...##.......##......
//   ..######.....##.......##....##.......######..
//   .......##....##.......##....##.......##......
//   .##....##....##.......##....##.......##......
//   ..######.....##.......##....########.########
//   */

const styles = StyleSheet.create({
  flatStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  innerCircle: {
    borderRadius: 35,
    width: 60,
    height: 60,
  },
});

//   // const styles = StyleSheet.create({
//   //   view:{
//   //     marginHorizontal:20
//   //   },
//   //   txt:{
//   //     fontSize:20,
//   //     color:'#545A91',
//   //     fontWeight:'700'
//   //   },
//   //   Icon:{
//   //     marginHorizontal:15,
//   //     color:'#545A91'
//   //   },
//   //   view_tran:{
//   //     flexDirection:'row',
//   //     backgroundColor:'#fff',
//   //     borderRadius:30,
//   //     alignItems:'center',
//   //     height:60,
//   //     width:310,
//   //     marginVertical:20,
//   //     toFixed:'width'
//   //   },
//   //   txtTouchableOpacity:{
//   //     height:30,
//   //     width:'20%',
//   //     borderRadius:50,
//   //     backgroundColor: '#fff',
//   //     alignItems:'center',
//   //     justifyContent:'center'
//   //   },
//   //   txt_tran:{
//   //     color:'#545A91',
//   //     fontWeight:'700'
//   //   }
//   // })
//   // const styles = {
//   //   view:{
//   //     marginHorizontal:20
//   //   },
//   //   txt:{
//   //     fontSize:20,
//   //     color:'#3D4785',
//   //     fontWeight:'700'
//   //   },
//   //   Icon:{
//   //     marginHorizontal:15,
//   //     color:'#3D4785'
//   //   },
//   //   view_tran:{
//   //     flexDirection:'row',
//   //     backgroundColor:'#fff',
//   //     borderRadius:30,
//   //     alignItems:'center',
//   //     height:60,
//   //     width:310,
//   //     marginVertical:20,
//   //     toFixed:'width'
//   //   },
//   //   txtTouchableOpacity:{
//   //     height:30,
//   //     width:'30%',
//   //     borderRadius:50,
//   //     backgroundColor: '#fff',
//   //     alignItems:'center',
//   //     justifyContent:'center'
//   //   },
//   //   txt_tran:{
//   //     color:'#545A91',
//   //     fontWeight:'700'
//   //   }
//   // }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection:'row',
//       marginVertical:10,
//       justifyContent: 'space-between',
//       marginHorizontal:10,
//       backgroundColor: 'red',
//     },
//     outerCircle: {
//       borderRadius: 40,
//       width: 70,
//       height: 70,
//       backgroundColor: 'gray',
//     },
//     innerCircle: {
//       borderRadius: 35,
//       width: 60,
//       height: 60,
//       margin: 5,
//     },
//   });
export default Payment;
