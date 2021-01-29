import React, {
  Fragment,
  useLayoutEffect,
  useRef,
  useContext,
  useState,
} from 'react';
import {View, StyleSheet, Platform, KeyboardAvoidingView} from 'react-native';
import {DefaultInput, ImagePicker, DefaultSelect} from '../../../components';
import {Formik, Field} from 'formik';
import {basicValidationSchema} from '../validationSchema';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../../context';
import {useGeolocation} from '../../../helpers';
import { ScrollView } from 'react-native-gesture-handler';

const gender = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

export const BasicInfo = ({navigation}) => {
  const {position} = useGeolocation();
  const formikRef = useRef(null);
  const authUser = useContext(AuthContext);
  const [imagePath, setImagePath] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="md-chevron-forward-outline"
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

  function getImagePath(src) {
    setImagePath(src);
  }

  return (
    <Fragment>
      <KeyboardAvoidingView style={styles.root}>
        <ScrollView contentContainerStyle={styles.section}>
          <Formik
            innerRef={formikRef}
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              gender: '',
              password: "",
              repeat_password: ""
            }}
            onSubmit={(value) => {
              value.avatar = imagePath;
              value.lat = position.latitude;
              value.lng = position.longitude;
              authUser.userData = value;
              navigation.navigate('Employment');
            }}
            validationSchema={basicValidationSchema}>
            {(formikProps) => (
              <Fragment>
                <DefaultInput
                  name="first_name"
                  placeholder="First name"
                  formikProps={formikProps}
                  style={styles.inputs}
                />
                <DefaultInput
                  name="last_name"
                  placeholder="Last name"
                  formikProps={formikProps}
                  style={styles.inputs}
                />
                <DefaultInput
                  autoCompleteType="email"
                  name="email"
                  placeholder="Email address"
                  formikProps={formikProps}
                  style={styles.inputs}
                  autoCompleteType="off"
                />
                <Field
                  component={DefaultSelect}
                  style={styles.select}
                  name="gender"
                  data={gender}
                  placeholder="Select gender"
                />
                <DefaultInput
                  autoCompleteType="password"
                  secureTextEntry={true}
                  name="password"
                  placeholder="Password"
                  formikProps={formikProps}
                  style={styles.inputs}
                />
                <DefaultInput
                  autoCompleteType="password"
                  secureTextEntry={true}
                  name="repeat_password"
                  placeholder="Confirm password"
                  formikProps={formikProps}
                  style={styles.inputs}
                />

                <ImagePicker getImagePath={getImagePath} />
              </Fragment>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  heading: {
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputs: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingVertical: Platform.OS == 'ios' ? 12 : 0,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    color: '#6b4d2b',
  },
  select: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    padding: 0,
    paddingLeft: 18,
    height: 47,
    color: '#6b4d2b',
  },
});
