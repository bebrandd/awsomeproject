import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
//import Entypo from 'react-native-vector-icons/Entypo'
//import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import style from '../Login/style'

export const HOME = <Ionicons name="home" size={28} />;
export const PAYMENT = <Ionicons name="card" size={28} />;
export const USER = <Ionicons name="person-circle" size={28} />;
export const RECENT = <Ionicons name="ios-receipt" size={28} />;
export const LOCATION = <Ionicons name="ios-location-sharp" size={28} />;
export const SETTING = <Ionicons name="settings" size={28} />;

class BottomBar extends Component {
  state = {
    data: [
      {name: 'Home', icon: HOME, selected: true},
      {name: 'Payment', icon: PAYMENT, selected: false},
      {name: 'User', icon: USER, selected: false},
      {name: 'Recent', icon: RECENT, selected: false},
      {name: 'Location', icon: LOCATION, selected: false},
      {name: 'Setting', icon: SETTING, selected: false},
    ],
  };
  /*
  .##........#######...######...####..######.
  .##.......##.....##.##....##...##..##....##
  .##.......##.....##.##.........##..##......
  .##.......##.....##.##...####..##..##......
  .##.......##.....##.##....##...##..##......
  .##.......##.....##.##....##...##..##....##
  .########..#######...######...####..######.
  */
  onPressName = (currantIndex) => {
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
    if (currantIndex == 0) {
      this.props.navigation.navigate('Home');
    } else if (currantIndex == 1) {
      this.props.navigation.navigate('Payment');
    } else if (currantIndex == 2) {
      this.props.navigation.navigate('User');
    } else if (currantIndex == 3) {
      this.props.navigation.navigate('Recent');
    } else if (currantIndex == 4) {
      this.props.navigation.navigate('Location');
    } else if (currantIndex == 5) {
      this.props.navigation.navigate('Settings');
    }
  };
  /*
  ..######...#######..##.....##.########...#######..##....##....###....##....##.########
  .##....##.##.....##.###...###.##.....##.##.....##.###...##...##.##...###...##....##...
  .##.......##.....##.####.####.##.....##.##.....##.####..##..##...##..####..##....##...
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.##.....##.##.##.##....##...
  .##.......##.....##.##.....##.##........##.....##.##..####.#########.##..####....##...
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.....##.##...###....##...
  ..######...#######..##.....##.##.........#######..##....##.##.....##.##....##....##...
  */
  renderBottom = () => {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-around',
          backgroundColor: '#3D4785',
          paddingVertical: 10,
          flexDirection: 'row',
        }}
        horizontal={true}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.bottomStyle,
                {backgroundColor: item.selected ? '#fff' : null},
              ]}
              onPress={() => this.onPressName(index)}>
              <Text style={{color: item.selected ? '#ff5f2e' : '#8b8687'}}>
                {item.icon}
              </Text>
              {item.selected ? (
                <Text
                  style={{
                    fontSize: 12,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    color: '#8b8687',
                  }}>
                  {item.name}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  renderMainview = () => {
    return <View>{this.renderBottom()}</View>;
  };

  render() {
    return this.renderMainview();
  }
}
/*
..######..########.##....##.##.......########..######.
.##....##....##.....##..##..##.......##.......##....##
.##..........##......####...##.......##.......##......
..######.....##.......##....##.......######....######.
.......##....##.......##....##.......##.............##
.##....##....##.......##....##.......##.......##....##
..######.....##.......##....########.########..######.
*/
const styles = StyleSheet.create({
  bottomStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});

export default BottomBar;
