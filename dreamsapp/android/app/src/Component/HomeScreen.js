import * as React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import logo from '../images/logo.png';
import traingle from '../images/traingle.png';

function HomeScreen({navigation}) {

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.image} source={logo} />
        <Button title="click" onPress={() => navigation.navigate('Details')} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column-reverse',
          alignSelf: 'center',
          paddingBottom: 24,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{paddingBottom: 16, color: 'black'}}>From</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{marginRight: 16}} source={traingle} />
            <Text
              style={{letterSpacing: 5, fontWeight: 'bold', color: 'black'}}>
              IBN952
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 3,
    alignSelf: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 32,
    alignSelf: 'center',
    color: 'black',
    padding: 10,
  },
  button: {
    display: 'none',
    paddingBottom: 40,
  },
});
export default HomeScreen;
