import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Button} from '../../../components';
import {translate, changeLanguage} from '../../../i18n';
import RNPickerSelect from 'react-native-picker-select';
import I18n from 'react-native-i18n';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

export const HomePage = ({navigation}) => {
  const [value, setValue] = useState(I18n.locale);
  function handleChange(value) {
    changeLanguage(value)
    setValue(value)
  }
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.languageTable}>
        <RNPickerSelect
          onValueChange={handleChange}
          style={{
            inputIOS: {fontSize: 17},
            inputAndroid: {fontSize: 17},
          }}
          value={value}
          items={[
            {label: 'En', value: 'en'},
            {label: 'Am', value: 'hy'},
          ]}
        />
      </View>
      <View style={styles.section}>
        <Image
          style={{width: width * 0.8, height: 70, resizeMode: 'contain'}}
          source={{
            uri:
              'https://www.mentorcliq.com/hs-fs/hubfs/lpm-mq-web-assets/imgs/mentorcliQ-logo-20190405.png?width=718&height=128&name=mentorcliQ-logo-20190405.png',
          }}
        />
        <View style={styles.table}>
          <Button
            name={translate('welcome.signIn')}
            onPress={() => navigation.navigate('SignIn')}
          />
          <Button
            name={translate('welcome.signUp')}
            onPress={() => navigation.navigate('BasicInfo')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  table: {
    justifyContent: 'space-around',
    height: 120,
  },
  languageTable: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    padding: 15,
  },
});
