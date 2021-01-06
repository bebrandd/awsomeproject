import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import {getData, storeData} from '../helper/utils';

const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState(
    'https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg',
  );
  const [pic, setPic] = useState();

  useEffect(async () => {
    const res = await getData();
    const pic = JSON.parse(res);
    setPic(pic);
  }, []);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      storeData('image');
      setImg(image.path);
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#F3F8FE'}}>
      <Modal animationIn="bounce" isVisible={visible}>
        <View style={styles.txtModal}>
          <Text>Hello Modal!</Text>

          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
      <View style={styles.view_1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              style={styles.headerIcon}
              name="filter"
              size={25}></Ionicons>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setVisible(true)}>
            <Ionicons
              style={styles.headerIcon}
              name="ellipsis-vertical"
              size={25}></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => choosePhotoFromLibrary()}>
            {img ? (
              <Image source={{uri: img}} style={styles.imgs} />
            ) : (
              <Image source={{uri: img}} style={styles.imgs} />
            )}
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 25,
              color: '#3D4785',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            johnny depp
          </Text>
          <Text style={{fontSize: 15, color: '#3D4785', fontWeight: 'normal'}}>
            UX/UI Designer
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 50,
            marginVertical: 15,
          }}>
          <View>
            <Text style={styles.txtFont}>$8900</Text>
            <Text style={{color: '#3D4785'}}>Income</Text>
          </View>
          <View>
            <Text style={styles.txtFont}>$5500</Text>
            <Text style={{color: '#3D4785'}}>Expence</Text>
          </View>
          <View>
            <Text style={styles.txtFont}>$890</Text>
            <Text style={{color: '#3D4785'}}>Loan</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 5,
            alignItems: 'center',
          }}>
          <Text style={{color: '#3C4584', fontSize: 25}}>Overview</Text>
          <Ionicons
            name="md-notifications-outline"
            style={{
              color: '#3D4785',
              fontSize: 25,
              marginLeft: 10,
              marginTop: 10,
            }}></Ionicons>
        </View>
        <Text
          style={{color: '#3C4584', marginHorizontal: 15, marginVertical: 15}}>
          Dec 9, 2020
        </Text>
      </View>

      <View style={styles.view_2}>
        <FontAwesome
          name="arrow-circle-up"
          size={40}
          style={{marginHorizontal: 15}}
        />
        <View>
          <Text>Sent</Text>
          <View style={styles.txtView}>
            <Text style={styles.fonts}>Sending Payment to the clients</Text>
            <Text style={{marginHorizontal: 30}}>$150</Text>
          </View>
        </View>
      </View>

      <View style={styles.view_2}>
        <FontAwesome
          name="arrow-circle-down"
          size={40}
          style={{marginHorizontal: 15}}
        />
        <View>
          <Text>Receive</Text>
          <View style={styles.txtView}>
            <Text style={styles.fonts}>Receive salary from company</Text>
            <Text style={{marginHorizontal: 30, marginLeft: 40}}>$250</Text>
          </View>
        </View>
      </View>

      <View style={styles.view_2}>
        <Fontisto
          name="money-symbol"
          size={35}
          style={{marginHorizontal: 15}}
        />
        <View>
          <Text>Loan</Text>
          <View style={styles.txtView}>
            <Text style={styles.fonts}>Loan for a car</Text>
            <Text style={{marginHorizontal: 30, marginLeft: 110}}>$250</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
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
  txtModal: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  view_1: {
    marginHorizontal: 20,
    maxHeight: 300,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  headerIcon: {
    marginVertical: 10,
    marginHorizontal: 15,
    color: '#3D4785',
  },
  imgs: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  txtFont: {
    fontSize: 20,
    color: '#3D4785',
    fontWeight: '700',
  },
  view_2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    height: 60,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fonts: {
    color: '#868686',
    fontSize: 10,
  },
});
export default Home;
