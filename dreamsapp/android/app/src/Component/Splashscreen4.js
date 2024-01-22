import {View, Text, Image} from 'react-native';
import React from 'react';
import screen4 from '../images/screen4.png';

const Splashscreen4 = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Text
          style={{fontWeight: 'bold', fontSize: 18}}
          onPress={() => navigation.navigate('Screen4')}>
          Skip
        </Text>
      </View>
      <View style={{flex: 2, alignItems: 'center'}}>
        <Image style={{marginTop: -50, marginBottom: 40}} source={screen4} />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            letterSpacing: 2,
            color: 'black',
            paddingBottom: 10,
          }}>
          Announcements
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
          Announcement is your go-to platform for real-time, hyper-local news
          and updates. We bring you the latest happenings in your community.
          Join us in fostering a stronger, more informed, and closely-knit
          community. Your world, your news, right at your fingertips.
        </Text>
      </View>

      <View style={{flex: 1}} />
    </View>
  );
};

export default Splashscreen4;
