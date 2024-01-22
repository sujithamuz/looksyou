import {View, Text, Image} from 'react-native';
import React from 'react';
import screen5 from '../images/screen5.png';
import arrow from '../images/Arrowicon.png';
import traingle from '../images/traingle.png';

const Splashscreen5 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 18}}
          onPress={() => navigation.navigate('Screen5')}>
          Skip
        </Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image style={{marginTop: -50, marginBottom: 40}} source={screen5} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            letterSpacing: 2,
            color: 'black',
            paddingBottom: 10,
          }}>
          AI Solutions
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
          IBN - I to I to AI is International business network to connect people
          in AI through direct communications
        </Text>
      </View>

      <View style={{flex: 1}}>
        <Image style={{alignSelf: 'center'}} source={arrow} />
        <View style={{flexDirection: 'row', alignSelf: 'center',marginTop:90}}>
          <Image style={{marginRight: 15}} source={traingle} />
          <Text style={{letterSpacing: 5, fontWeight: 'bold', color: 'black'}}>
            IBN
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Splashscreen5;
