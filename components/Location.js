import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import MapViewDirection from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

export class Location extends Component {
  state = {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    //marginBottom: 1,
    categories: [
      {
        name: 'Central Banks',
        icon: (
          <MaterialCommunityIcons
            style={styles.chipsIcon}
            name="bank"
            size={18}
          />
        ),
      },
      {
        name: 'Retail Bank',
        icon: (
          <MaterialCommunityIcons
            name="handshake"
            style={styles.chipsIcon}
            size={18}
          />
        ),
      },
      {
        name: 'Commercial Banks',
        icon: (
          <FontAwesome5
            name="hand-holding-usd"
            style={styles.chipsIcon}
            size={18}
          />
        ),
      },
      {
        name: 'Cooperative Banks',
        icon: (
          <FontAwesome5 name="handshake" style={styles.chipsIcon} size={18} />
        ),
      },
      {
        name: 'Investment Banks',
        icon: (
          <MaterialCommunityIcons
            name="wallet-plus"
            style={styles.chipsIcon}
            size={15}
          />
        ),
      },
      {
        name: 'Savings and Loan Associations',
        icon: (
          <MaterialIcons
            name="monetization-on"
            style={styles.chipsIcon}
            size={15}
          />
        ),
      },
    ],
  };
  // componentDidMount() {
  //   this.findCoordinates();
  //   this.requestLocationPermission();
  // }

  // findCoordinates = () => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       const {latitude, longitude} = position.coords;
  //       this.setState({coordinate: {latitude, longitude}});
  //       //console.log(position);
  //     },

  //     (error) => Alert.alert(error.message),
  //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //   );
  // };

  // async requestLocationPermission() {
  //   const chckLocationPermission = PermissionsAndroid.check(
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //   );
  //   if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
  //     alert("You've access for the location");
  //   } else {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Cool Location App required Location permission',
  //           message:
  //             'We required Location permission in order to get device location ' +
  //             'Please grant us.',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         alert("You've access for the location");
  //       } else {
  //         alert("You don't have access for the location");
  //       }
  //     } catch (err) {
  //       alert(err);
  //     }
  //   }
  // }

  render() {
    let {latitude, longitude} = this.state.coordinate;

    return (
      <View style={styles.container}>
        <MapView
          // ref={(map) => {
          //   this.map = map;
          // }}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.container}
          //style={[styles.container, {marginBottom: this.state.marginBottom}]}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          //zoomControlEnabled={true}
          showsUserLocation={true}
          onPress={(e) => {
            this.setState({
              coordinate: e.nativeEvent.coordinate,
            });
          }}
          showsCompass={false}
          // onMapReady={() => {
          //   this.setState({marginBottom: 0});
          // }}
          // onRegionChangeComplete={(region) =>
          //   this.setState({
          //     coordinate: region,
          //   })
          // }
          // onRegionChange={(region) =>
          //   this.setState({
          //     coordinate: region,
          //   })
          // }
        >
          <Marker
            //draggable
            coordinate={this.state.coordinate}
            title="test"
            description="des"
            image={require('../assets/google-maps.png')}
            //onDragEnd={(e) => {
            //console.log('dragEnd', e.nativeEvent.coordinate);
            //}}
          />
        </MapView>

        {/* <View style={styles.searchBox}>
          <Ionicons
            name="ios-location-sharp"
            size={20}
            style={{
              marginVertical: 5,
              marginHorizontal: 5,
              color: '#ff5f2e',
            }}
          /> */}
        <View style={styles.searchBox}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed="auto" // true/false/undefined
            fetchDetails={true}
            renderDescription={(row) => row.description} // custom description render
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data);
              console.log(details);
            }}
            setAddressText={() => {
              return '';
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyACANY3wosVKHENgRVUB_0MmGgW__dRkFA',
              language: 'en', // language of the results
            }}
            styles={{
              textInputContainer: {width: '100%', padding: 0},
              description: {
                fontWeight: 'bold',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={
              {
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }
            }
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              types: '(cities)',
            }}
            filterReverseGeocodingByTypes={[
              'locality',
              'administrative_area_level_3',
            ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            predefinedPlaces={[homePlace, workPlace]}
            predefinedPlacesAlwaysVisible={true}
            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            //renderRightButton={() => <Text>Custom text after the input</Text>}
          />
        </View>
        {/* <Ionicons
            name="ios-search"
            size={20}
            style={{
              marginHorizontal: 5,
              marginVertical: 5,
            }}
          />
        </View> */}
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipsScrollView}>
          {this.state.categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.chipsItem}>
              {category.icon}
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 0,
          }}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            <View style={styles.crosshairGps}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="crosshairs-gps"
                  size={25}
                  color="#ff5f2e"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.directions}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="directions"
                  size={25}
                  color="#fff"
                />
                <Text
                  style={{fontSize: 15, textAlign: 'center', color: '#fff'}}>
                  Go
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 10,
    //flexDirection: 'row',

    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,

    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    top: Platform.OS === 'ios' ? 90 : 80,
    position: 'absolute',
    paddingHorizontal: 10,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 30,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  crosshairGps: {
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  directions: {
    height: 60,
    width: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
    backgroundColor: '#ff5f2e',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
export default Location;
