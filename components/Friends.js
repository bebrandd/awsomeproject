import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getColor} from '../helper/utils';

export class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  async componentDidMount() {
    const json = await getColor();

    //console.log("json",json);
    this.setState({data: json});
  }

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: this.state.data,
            height: 50,
            marginHorizontal: 25,
            marginVertical: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}> HELLO </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: this.state.data,
              height: 50,
              marginHorizontal: 25,
              justifyContent: 'center',
              alignItems: 'center',
              width: '20%',
            }}>
            <Text style={{color: '#fff'}}>World</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Friends;
