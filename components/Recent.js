import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Recent = ({navigation}) => {
  const [state, setState] = useState({
    allSelected: true,
    incomeSelected: false,
    expenseSelected: false,
  });

  /*
  ..######...#######..##.....##.########...#######..##....##....###....##....##.########..######.
  .##....##.##.....##.###...###.##.....##.##.....##.###...##...##.##...###...##....##....##....##
  .##.......##.....##.####.####.##.....##.##.....##.####..##..##...##..####..##....##....##......
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.##.....##.##.##.##....##.....######.
  .##.......##.....##.##.....##.##........##.....##.##..####.#########.##..####....##..........##
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.....##.##...###....##....##....##
  ..######...#######..##.....##.##.........#######..##....##.##.....##.##....##....##.....######.
  */

  const renderTexts = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          marginVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#3D4785', fontWeight: '700', fontSize: 20}}>
          Recent Transactions
        </Text>
        <Text style={{color: '#6B6C6E'}}>See all</Text>
      </View>
    );
  };
  const allData = () => {
    return (
      <View style={styles.view}>
        <Text style={styles.txt}>Today Receipt</Text>
        <View style={styles.view_tran}>
          <MaterialCommunityIcons
            name="email-newsletter"
            size={35}
            style={styles.Icon}
          />
          <View>
            <Text>Payment</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text style={{color: '#868686', fontSize: 10}}>
                Payment from Andrea
              </Text>
              <Text
                style={{
                  marginHorizontal: 30,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                $5000.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const incomeData = () => {
    return (
      <View style={styles.view}>
        <Text style={styles.txt}>Today Receipt</Text>
        <View style={styles.view_tran}>
          <MaterialCommunityIcons
            name="email-newsletter"
            size={35}
            style={styles.Icon}
          />
          <View>
            <Text>Payment</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text style={{color: '#868686', fontSize: 10}}>
                Payment from Andrea
              </Text>
              <Text
                style={{
                  marginHorizontal: 30,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                $10000.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const expenseData = () => {
    return (
      <View style={styles.view}>
        <Text style={styles.txt}>Today Receipt</Text>
        <View style={styles.view_tran}>
          <MaterialCommunityIcons
            name="email-newsletter"
            size={35}
            style={styles.Icon}
          />
          <View>
            <Text>Payment</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Text style={{color: '#868686', fontSize: 10}}>
                Payment from Andrea
              </Text>
              <Text
                style={{
                  marginHorizontal: 30,
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                $210000.00
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderAll = () => {
    return (
      <View>
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() =>
              setState({
                allSelected: true,
                incomeSelected: false,
                expenseSelected: false,
              })
            }
            style={[
              styles.txtTouchableOpacity,
              {backgroundColor: state.allSelected ? '#3D4785' : '#fff'},
            ]}>
            <Text
              style={[
                styles.txt_tran,
                {color: state.allSelected ? '#fff' : '#3D4785'},
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setState({
                allSelected: false,
                incomeSelected: true,
                expenseSelected: false,
              })
            }
            style={[
              styles.txtTouchableOpacity,
              {backgroundColor: state.incomeSelected ? '#3D4785' : '#fff'},
            ]}>
            <Text
              style={[
                styles.txt_tran,
                {color: state.incomeSelected ? '#fff' : '#3D4785'},
              ]}>
              Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setState({
                allSelected: false,
                incomeSelected: false,
                expenseSelected: true,
              })
            }
            style={[
              styles.txtTouchableOpacity,
              {backgroundColor: state.expenseSelected ? '#3D4785' : '#fff'},
            ]}>
            <Text
              style={[
                styles.txt_tran,
                {color: state.expenseSelected ? '#fff' : '#3D4785'},
              ]}>
              Expense
            </Text>
          </TouchableOpacity>
        </View>
        {state.allSelected ? allData() : null}
        {state.incomeSelected ? incomeData() : null}
        {state.expenseSelected ? expenseData() : null}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={25}></MaterialIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={25}></Feather>
        </TouchableOpacity>
      </View>
    );
  };
  const renderMainView = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#F3F8FE'}}>
        {renderHeader()}
        {renderTexts()}
        {renderAll()}
      </View>
    );
  };
  return renderMainView();
};

/*
..######..########.##....##.##.......########
.##....##....##.....##..##..##.......##......
.##..........##......####...##.......##......
..######.....##.......##....##.......######..
.......##....##.......##....##.......##......
.##....##....##.......##....##.......##......
..######.....##.......##....########.########
*/
// const styles = StyleSheet.create({
//   view:{
//     marginHorizontal:20
//   },
//   txt:{
//     fontSize:20,
//     color:'#545A91',
//     fontWeight:'700'
//   },
//   Icon:{
//     marginHorizontal:15,
//     color:'#545A91'
//   },
//   view_tran:{
//     flexDirection:'row',
//     backgroundColor:'#fff',
//     borderRadius:30,
//     alignItems:'center',
//     height:60,
//     width:310,
//     marginVertical:20,
//     toFixed:'width'
//   },
//   txtTouchableOpacity:{
//     height:30,
//     width:'20%',
//     borderRadius:50,
//     backgroundColor: '#fff',
//     alignItems:'center',
//     justifyContent:'center'
//   },
//   txt_tran:{
//     color:'#545A91',
//     fontWeight:'700'
//   }
// })
const styles = {
  view: {
    marginHorizontal: 20,
  },
  txt: {
    fontSize: 20,
    color: '#3D4785',
    fontWeight: '700',
  },
  Icon: {
    marginHorizontal: 15,
    color: '#3D4785',
  },
  view_tran: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    height: 60,
    width: 310,
    marginVertical: 20,
    toFixed: 'width',
  },
  txtTouchableOpacity: {
    height: 30,
    width: '20%',
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_tran: {
    color: '#545A91',
    fontWeight: '700',
  },
};

export default Recent;
