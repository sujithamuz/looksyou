import {View, Text, Image} from 'react-native';
import React from 'react';
import screen2 from '../images/screen2.png';

const Splashscreen2 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 18}}
          onPress={() => navigation.navigate('Screen2')}>
          Skip
        </Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image style={{marginTop: -50, marginBottom: 40}} source={screen2} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            letterSpacing: 2,
            color: 'black',
            paddingBottom: 10,
          }}>
          International Business Network
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
          IBN is your global partner for smarter business solutions. Harnessing
          the power of Artificial Intelligence. Join the IBN community and be at
          the forefront of the business revolution. Together, we'll reshape the
          future of global commerce.
        </Text>
      </View>

      <View style={{flex: 1}} />
    </View>
  );
};

export default Splashscreen2;
