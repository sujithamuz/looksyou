import {View, Text, Image} from 'react-native';
import React from 'react';
import screen3 from '../images/screen3.png';

const Splashscreen3 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 18}}
          onPress={() => navigation.navigate('Screen3')}>
          Skip
        </Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image style={{marginTop: -50, marginBottom: 40}} source={screen3} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            letterSpacing: 2,
            color: 'black',
            paddingBottom: 10,
          }}>
          Nearby services
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            color: 'black',
            justifyContent: 'space-between',
            textAlign: 'center',
            letterSpacing: 3,
            padding: 10,
            lineHeight: 28,
          }}>
          Based on your GPS Location you can get information on any service
          persons, technicians, professionals, jobs, business, rentals, cab
          bookings, buy & sell products, projects, loans & investors
        </Text>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
};

export default Splashscreen3;
