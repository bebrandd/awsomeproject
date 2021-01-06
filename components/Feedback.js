import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
export default class Feedback extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        data: [],
        username: '',
        email: '',
      };
    }
  }

  componentDidMount() {
    this.callApi();
  }

  async callApi() {
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    //console.log(resp.data);

    this.setState({data: resp.data});
  }

  async onSubmit(e) {
    e.preventDefault();
    const employee = {
      username: this.state.username,
      email: this.state.email,
    };
    let res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      employee,
    );
    //console.log(res.data);
    this.setState({data: res.data});
    //console.log({data: res.data});
  }

  render() {
    return (
      <View>
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
              Username
            </Text>

            <TextInput
              placeholder="johnny_depp"
              style={{marginHorizontal: 25}}
              value={this.state.username}
              onChangeText={(val) => this.setState({username: val})}
            />
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
              Email Address
            </Text>
            <TextInput
              placeholder="Username@gmail.com"
              style={{marginHorizontal: 25}}
              value={this.state.email}
              onChangeText={(val) => this.setState({email: val})}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 55,
              width: '90%',
              borderRadius: 50,
              marginVertical: 10,
              backgroundColor: '#f9c00c',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={(e) => {
              this.onSubmit(e);
            }}>
            <Text style={{color: '#000', fontWeight: '700'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <Text style={{fontWeight: '700', fontSize: 30}}>Api CALL</Text>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <Text>
                {item.name}, {item.email}
              </Text>
            )}
          />
        </View>
      </View>
    );
  }
}
