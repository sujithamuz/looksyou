import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import logo from '../images/logo.png';
import {SelectCountry} from 'react-native-element-dropdown';
import traingle from '../images/traingle.png';

const Splashscreen6 = ({navigation}) => {
  const [language, setLanguage] = useState('1');
  const local_data = [
    {
      value: '1',
      lable: 'English',
      image: require('../main/assets/languageicon.png'),
    },
    {
      value: '2',
      lable: 'Tamil',
      image: require('../main/assets/languageicon.png'),
    },
    {
      value: '3',
      lable: 'Telugu',
      image: require('../main/assets/languageicon.png'),
    },
    {
      value: '4',
      lable: 'Hindi',
      image: require('../main/assets/languageicon.png'),
    },
    {
      value: '5',
      lable: 'Malayalam',
      image: require('../main/assets/languageicon.png'),
    },
  ];
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <View style={{flex: 3, marginTop: 60}}>
        <Image style={{width: 180, height: 180}} source={logo} />
      </View>
      <View style={{flex: 2}}>
        <SelectCountry
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          imageStyle={styles.imageStyle}
          iconStyle={styles.iconStyle}
          maxHeight={200}
          value={language}
          data={local_data}
          valueField="value"
          labelField="lable"
          imageField="image"
          placeholder="Select country"
          searchPlaceholder="Search..."
          onChange={e => {
            setLanguage(e.value);
          }}
        />
      </View>
      <View style={{flex: 2}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
            color: 'black',
          }}>
          Read our Privacy Policy. Tap “ Agree and continue” to accept the Terms
          and Conditions.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Pressable style={styles.button}>
          <Text style={styles.text} onPress={()=>navigation.navigate('suji')}>Agree and Continue</Text>
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 50}}>
          <Image style={{marginRight: 15}} source={traingle} />
          <Text style={{letterSpacing: 5, fontWeight: 'bold', color: 'black'}}>
            IBN
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    color: '#4285F4',
    backgroundColor: 'rgba(179, 209, 251, 1)',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 30,
    height: 30,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#4285F4',
    marginLeft: 8,
    fontWeight: 700,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#4285F4',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#057BF9',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight:"500",
  },
});

export default Splashscreen6;
