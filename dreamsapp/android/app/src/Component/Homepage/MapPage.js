import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import logo from '../logo.png';
import {Searchbar} from 'react-native-paper';
import {Avatar, Card} from 'react-native-paper';

import rent from '../../images/rent.png';
import { nativeViewHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

function MapPage() {
  const tokyoRegion = {
    latitude: 13.0827,
    longitude: 80.2707,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const state = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: 'Best Place',
        description: 'This is the best place in Portland',
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: 'Second Best Place',
        description: 'This is the second best place in Portland',
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: 'Third Best Place',
        description: 'This is the third best place in Portland',
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: 'Fourth Best Place',
        description: 'This is the fourth best place in Portland',
      },
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  return (
    <View>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.0827,
          longitude: 80.2707,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
      
          {/* <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          /> */}
        

        <Marker
          style={styles.marker}
          image={logo}
          coordinate={tokyoRegion}
          title="suji">
          <Callout tooltip>
            <Card>
              <Card.Cover
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYm4wbYjbGX6szQV4p94p53bZN4sxxfV533ysIpaAQcZHcqaxkkwBhjj2OiqmHSjBAlw&usqp=CAU',
                }}
              />

              <Card.Content>
                <Text variant="bodyMedium">3 BHK Room For $ 10,000</Text>
              </Card.Content>
            </Card>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  bubble: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    width: 200,
    height: 100,
    borderWidth: 1,
  },

  image: {
    flex: 2,
    height: 100,
    width: 120,
    marginBottom: 60,
  },
});
export default MapPage;



