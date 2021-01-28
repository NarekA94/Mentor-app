import React, {Fragment, useLayoutEffect, useRef} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {DefaultInput, ImagePicker, DefaultSelect} from '../../../components';
import {Formik, Field} from 'formik';
import {basicValidationSchema} from '../validationSchema';
import Icon from 'react-native-vector-icons/Ionicons';

const gender = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

export const BasicInfo = ({navigation}) => {
  const formikRef = useRef(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="arrow-forward"
          size={30}
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
    <Fragment>
      <View style={styles.root}>
        {/* <H3 style={styles.heading}>Create an Account</H3> */}
        <View style={styles.section}>
          <Formik
            innerRef={formikRef}
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              gender: '',
            }}
            onSubmit={async (value) => {}}
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
                <ImagePicker />
                {/* <View style={{marginTop: 20}}>
                  <Button name="Next" onPress={formikProps.handleSubmit} />
                </View> */}
              </Fragment>
            )}
          </Formik>
        </View>
      </View>
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
