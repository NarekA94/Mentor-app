import React, {useLayoutEffect, Fragment, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {DefaultInput, Loader} from '../../../components';
import {signInValidationSchema} from '../validationSchema';
import {signIn} from '../../../store/actions/auth';

export const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {error} = useSelector((state) => state.auth);
  const formikRef = useRef(null);
  const loaderRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="checkmark-sharp"
          size={28}
          style={{marginRight: 10}}
          onPress={handleSubmit}
        />
      ),
    });
  }, [navigation]);

  function handleSubmit() {
    formikRef?.current?.handleSubmit();
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{padding: 25}}>
        {error && (
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              textTransform: 'capitalize',
            }}>
            {error}
          </Text>
        )}

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          innerRef={formikRef}
          validationSchema={signInValidationSchema}
          onSubmit={async (value) => {
            loaderRef?.current?.open();
            await dispatch(signIn(value));
            loaderRef?.current?.close();
          }}>
          {(formikProps) => (
            <Fragment>
              <DefaultInput
                autoCompleteType="email"
                name="email"
                placeholder="Email address"
                formikProps={formikProps}
                style={styles.inputs}
                autoCompleteType="off"
              />
              <DefaultInput
                autoCompleteType="password"
                secureTextEntry={true}
                name="password"
                placeholder="Password"
                formikProps={formikProps}
                style={styles.inputs}
              />
            </Fragment>
          )}
        </Formik>
      </View>
      <Loader ref={loaderRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingVertical: Platform.OS == 'ios' ? 12 : 0,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    color: '#6b4d2b',
  },
});
