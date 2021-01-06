import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';

/*
..######..########.##....##.##.......########..######.
.##....##....##.....##..##..##.......##.......##....##
.##..........##......####...##.......##.......##......
..######.....##.......##....##.......######....######.
.......##....##.......##....##.......##.............##
.##....##....##.......##....##.......##.......##....##
..######.....##.......##....########.########..######.
*/

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F3F8FE',
  },
  slide2: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F3F8FE',
  },
  slide3: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F3F8FE',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  view: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  txt: {
    fontSize: 20,
    color: '#545A91',
    fontWeight: '700',
  },
  Icon: {
    marginHorizontal: 15,
    color: '#545A91',
  },
  view_tran: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    height: 60,
    width: 300,
    marginVertical: 20,
    toFixed: 'width',
  },
};

const HistoryScreen = ({navigation}) => {
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
          marginVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#545A91', fontWeight: '700', fontSize: 20}}>
          Recent Transactions
        </Text>
        <Text style={{color: '#6B6C6E'}}>See all</Text>
      </View>
    );
  };
  const renderAll = () => {
    //const numbers = ['All','Income','Expense'];
    //const listItems = numbers.map((item) =>
    //<Text style={{paddingHorizontal:10,paddingVertical:5,borderRadius:50,backgroundColor:'#fff',marginHorizontal:5}}>
    //{item}
    //</Text>
    //);
    return (
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View testID="Beautiful" style={styles.slide1}>
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
        </View>
        <View testID="Beautiful" style={styles.slide2}>
          <View style={styles.view}>
            <Text style={styles.txt}>Yesterday Receipt</Text>
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
                    $1200.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Swiper>
    );
  };

  /*const All = () =>{

    return(
        <View style={{marginVertical:10,marginHorizontal:20,}}>
          <Text style={{fontSize:20,color:'#545A91',fontWeight:'700'}}>Today</Text>
          <View style={{flexDirection:'row',backgroundColor:'#fff',borderRadius:30,alignItems:'center',height:60,marginVertical:20}}>
            <MaterialCommunityIcons name="email-newsletter" size={35} style={{marginHorizontal:15,color:'#545A91'}}/>
              <View>
                <Text>Payment</Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:"#868686",fontSize:10}}>Payment from Andrea</Text>
                    <Text style={{marginHorizontal:30,marginLeft:80}}>$30.00</Text>
                  </View>
              </View>
          </View>
        </View>
    )
  }*/

  const renderHeader = () => {
    return (
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={25}></MaterialIcons>
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

export default HistoryScreen;
