import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

// ICONS
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const HOME = <FontAwesome5 name="home" size={24} />;
export const HISTORY = <FontAwesome name="credit-card" size={24} />;
export const HELPANDSUPPORT = <FontAwesome name="support" size={24} />;
export const FAQ = <AntDesign name="questioncircle" size={24} />;
export const Friends = <FontAwesome5 name="user-friends" size={24} />;
export const BHURO =
  'https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg';

export class DrawerScreen extends Component {
  state = {
    data: [
      {name: 'Home', icons: HOME, selected: true, itemS: false},
      {name: 'Friends', icons: Friends, selected: false, itemS: false},
      {name: 'History', icons: HISTORY, selected: false, itemS: false},
      {
        name: 'Help and Support',
        icons: HELPANDSUPPORT,
        selected: false,
        itemS: false,
      },
      {name: 'FAQ', icons: FAQ, selected: false, itemS: false},
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
  onPress = (currantIndex) => {
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
    //console.log(currantIndex)
    if (currantIndex == 0) {
      this.props.navigation.navigate('Home');
    } else if (currantIndex == 1) {
      this.props.navigation.navigate('Friends');
    } else if (currantIndex == 2) {
      this.props.navigation.navigate('HistoryScreen');
    } else if (currantIndex == 3) {
      this.props.navigation.navigate('HelpAndSupport');
    } else if (currantIndex == 4) {
      this.props.navigation.navigate('FAQScreen');
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
  renderProfilePic = () => {
    return (
      <View
        style={{
          marginVertical: 30,
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
        }}>
        <View style={styles.profile}>
          <Image
            source={{uri: BHURO}}
            style={{height: 100, width: 100, borderRadius: 50}}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EditProfileScreen')}
            style={{
              backgroundColor: '#3D4785',
              height: 40,
              width: '40%',
              justifyContent: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingVertical: 10,
            fontSize: 18,
            paddingLeft: 20,
            fontWeight: 'bold',
          }}>
          johnny depp
        </Text>
      </View>
    );
  };
  renderItems = () => {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View>
              {item.itemS ? (
                <View
                  style={{
                    backgroundColor: 'grey',
                    height: 0.5,
                    marginTop: 10,
                    marginBottom: 10,
                  }}></View>
              ) : null}
              <TouchableOpacity
                onPress={() => this.onPress(index)}
                style={styles.items}>
                <Text
                  style={{
                    paddingLeft: 8,
                    color: item.selected ? '#0787EA' : '#ff5f2e',
                  }}>
                  {item.icons}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    paddingLeft: 30,
                    paddingVertical: 10,
                    color: item.selected ? '#0787EA' : 'black',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };

  // renderLogout = () => {
  //   return (
  //     <View>
  //       <View style={{ backgroundColor: '#E4E4E4', height: 1, marginTop: 20 }} />
  //       <TouchableOpacity style={styles.logout}>
  //         <MaterialIcons
  //           style={{ paddingLeft: 5 }}
  //           name="logout" size={24} />
  //         <Text style={{ fontSize: 15, paddingLeft: 30, paddingVertical: 10 }}>Logout</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  renderMainView = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderProfilePic()}
        {this.renderItems()}
        {/* {this.renderLogout()} */}
      </ScrollView>
    );
  };

  render() {
    return this.renderMainView();
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
  items: {
    marginHorizontal: 20,
    marginVertical: 10,
    // backgroundColor: '#E5E9ED',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  logout: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#E5E9ED',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
});

export default DrawerScreen;
