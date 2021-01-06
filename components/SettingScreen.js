import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

const SettingScreen = () => {
  const [state, setState] = useState({
    country: 'uk',
  });
  return (
    <DropDownPicker
      items={[
        {
          label: 'UK',
          value: 'uk',
          icon: () => <Feather name="flag" size={18} color="#900" />,
        },
        {
          label: 'France',
          value: 'france',
          icon: () => <Feather name="flag" size={18} color="#900" />,
        },
      ]}
      defaultValue={state.country}
      containerStyle={{height: 40}}
      style={{backgroundColor: '#fafafa'}}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      dropDownStyle={{backgroundColor: '#fafafa'}}
      onChangeItem={(item) =>
        setState({
          country: item.value,
        })
      }
    />
  );
};

export default SettingScreen;
