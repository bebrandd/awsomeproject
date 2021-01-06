import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const logo =
  'https://previews.123rf.com/images/krustovin/krustovin1603/krustovin160300039/54448976-green-finance-logo-design.jpg';

const Login = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#F3F8FE'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{uri: logo}}
          style={{height: 130, width: 130, borderRadius: 100}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            borderRadius: 20,
            marginVertical: 10,
            backgroundColor: '#FFFFFF',
            elevation: 2,
          }}>
          <Text
            style={{
              marginTop: 10,
              marginHorizontal: 25,
              color: '#868686',
              fontWeight: '700',
            }}>
            Email Address
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 25,
              alignItems: 'center',
              marginBottom: 5,
            }}>
            <Fontisto style={{fontSize: 20}} name="email" />
            <TextInput
              placeholder="Username@gmail.com"
              style={{marginLeft: 10}}
            />
          </View>
        </View>

        <View
          style={{
            width: '90%',
            borderRadius: 20,
            marginVertical: 10,
            backgroundColor: '#FFFFFF',
            elevation: 2,
          }}>
          <Text
            style={{
              marginTop: 10,
              marginHorizontal: 25,
              color: '#868686',
              fontWeight: '700',
            }}>
            Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 25,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Fontisto style={{fontSize: 20}} name="locked"></Fontisto>
              <TextInput
                placeholder="Eg.JonneyDeep@123"
                style={{marginLeft: 10}}
              />
            </View>
            <EvilIcons name="eye" size={35}></EvilIcons>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 55,
            width: '90%',
            borderRadius: 50,
            marginVertical: 10,
            backgroundColor: '#3D4785',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}>
          <Text style={{color: '#7F7F81'}}>Sign Up</Text>
          <Text style={{color: '#7F7F81'}}>Forgot Password?</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
