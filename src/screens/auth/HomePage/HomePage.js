import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Button} from '../../../components';

const {width} = Dimensions.get('window');

export const HomePage = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Image
        style={{width: width * 0.8, height: 70, resizeMode: 'contain'}}
        source={{
          uri:
            'https://www.mentorcliq.com/hs-fs/hubfs/lpm-mq-web-assets/imgs/mentorcliQ-logo-20190405.png?width=718&height=128&name=mentorcliQ-logo-20190405.png',
        }}
      />
      <View style={styles.table}>
        <Button
          name="Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Button
          name="Sign Up"
          onPress={() => navigation.navigate('BasicInfo')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  table: {
    justifyContent: 'space-around',
    height: 120,
  },
});
