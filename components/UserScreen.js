import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Avatar, Caption, Title} from 'react-native-paper';
//import { BorderlessButton } from 'react-native-gesture-handler';
//import Panel from 'react-native-panel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getData} from '../helper/utils';

const UserScreen = ({navigation}) => {
  const [pic, setPic] = useState();

  useEffect(async () => {
    const res = await getData();
    console.log('res', res);

    // console.log("pic",pic)
    setPic(res);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg',
            }}
            size={80}
          />

          <View style={{margin: 20}}>
            <Title style={[styles.title]}>johnny depp</Title>
            <Caption style={styles.caption}>@johnny_depp</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        {/* {pic && <Text>{pic}</Text>} */}
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            color="#777777"
            size={20}
          />
          <Text style={{color: '#777', marginLeft: 20}}>
            Los Angeles, California, USA
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20} />
          <Text style={{color: '#777', marginLeft: 20}}>+011-900000009</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="#777777" size={20} />
          <Text style={{color: '#777', marginLeft: 20}}>
            johnny_depp@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="account-check-outline"
              color="#ff5f2e"
              size={25}
            />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color="#ff5f2e" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FeedBack')}>
          <View style={styles.menuItem}>
            <MaterialIcons name="feedback" color="#ff5f2e" size={25} />
            <Text style={styles.menuItemText}>Feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FE',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default UserScreen;
