import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, Image} from 'react-native';
import {H3, Button, Loader} from '../../../components';
import {logOut} from '../../../store/actions/auth';
import {APP_DOMAIN} from '../../../httpClient';

export const HomeScreen = ({navigation}) => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loaderRef = useRef();

  async function signOut() {
    loaderRef?.current?.open();
    await dispatch(logOut());
    loaderRef?.current?.close();
  }

  return (
    <View style={styles.root}>
      <View style={{height: 150, padding: 20, width: 150, marginTop: 25}}>
        <Image
          style={{
            height: '100%',
            resizeMode: 'cover',
            borderWidth: 1,
            width: '100%',
            borderRadius: 100,
          }}
          source={{
            uri: user?.avatar
              ? `${APP_DOMAIN}${user?.avatar}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMj5Jt7LQ0OQSdpmi02mQyidiU5qLDV0o6g&usqp=CAU',
          }}
        />
      </View>

      <H3>{`${user?.first_name || ''} ${user?.last_name || ''}`}</H3>
      <View style={styles.group}>
        <Button name="Groups" onPress={() => navigation.navigate('Group')} />
        <Button name="Log out" onPress={signOut} />
      </View>
      <Loader ref={loaderRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  group: {
    marginTop: 25,
    height: 95,
    justifyContent: 'space-between',
  },
});
