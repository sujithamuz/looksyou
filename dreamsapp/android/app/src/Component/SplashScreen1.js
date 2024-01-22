import React from 'react';
import {Image, StyleSheet, Text, View,Button} from 'react-native';
import screen1 from '../images/splashscreen1.png';

function SplashScreen1({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 18}}
          onPress={() => navigation.navigate('Screen')}>
          Skip
        </Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image style={{marginTop: -50, marginBottom: 40}} source={screen1} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            letterSpacing: 2,
            color: 'black',
            paddingBottom: 10,
          }}>
          Join to Dreams focus
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            letterSpacing: 10,
            paddingBottom: 10,
          }}>
          NEVER LIMIT
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
          It’s an INTERNATIONAL BUSINESS NETWORK platform for career growth,
          finding trusted service providers, business deals and giving back to
          the community. Join us to this journey of empowerment and opportunity
        </Text>
      </View>

      <View style={{flex: 1}} />
    </View>
  );
}

export default SplashScreen1;
