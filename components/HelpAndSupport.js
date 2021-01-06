import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getRegisterData, saveRegisterData} from '../helper/utils';
class HelpAndSupport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      newData: [],
    };
  }

  // async componentDidMount() {

  //    const json = await getRegisterData()
  //    console.log("json data",json)

  //    this.setState({newData:json})
  // }

  // handleName = (text) => {
  //    this.setState({ name: text })
  // }
  // handleAge = (text) => {
  //    this.setState({ age: text })
  // }
  submit = () => {
    const name = this.state.name;
    const age = this.state.age;
    const obj = {name: name, age: age};
    console.log('object', obj);
    const newArray = this.state.newData.slice(0); // Create a copy
    newArray.push(obj); // Push the object

    console.log('newArray', newArray);
    this.setState({newData: newArray});

    // let tmpArr = []
    // let obj = {
    //    name:this.state.name,
    //    age:this.state.age
    // }

    // console.log("TEMP ARR",tmpArr)
    // this.setState({newData:tmpArr,name:'',age:''})
    // saveRegisterData(obj)
  };

  render() {
    return (
      <View>
        <View
          style={{
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 5,
          }}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Name"
              value={this.state.name}
              autoCapitalize="none"
              onChangeText={(val) => this.setState({name: val})}
            />

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Age"
              autoCapitalize="none"
              value={this.state.age}
              keyboardType="number-pad"
              onChangeText={(val) => this.setState({age: val})}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.submit()}>
              <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 5,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              margin: 5,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 5,
              flexDirection: 'row',
            }}>
            <Text style={{marginLeft: 10}}>Id</Text>
            <Text style={{marginRight: 100}}>Name</Text>
            <Text style={{marginRight: 10}}>Age</Text>
          </View>
          <View
            style={{
              margin: 5,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 8,
              paddingVertical: 8,
              paddingHorizontal: 5,
            }}>
            {this.state.newData.map((ele, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{marginLeft: 10}}>{index + 1}</Text>
                  <Text style={{marginRight: 100}}>{ele.name}</Text>
                  <Text style={{marginRight: 10}}>{ele.age}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}
export default HelpAndSupport;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#42A5F5',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
