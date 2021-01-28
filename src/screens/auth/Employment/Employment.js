import React, {useRef, useLayoutEffect, Fragment} from 'react';
import {View, StyleSheet} from 'react-native';
import {DefaultInput} from '../../../components';
import {Formik} from 'formik';
import {employmentValidtaionSchema} from '../validationSchema';
import Icon from 'react-native-vector-icons/Ionicons';

export const Employment = ({navigation}) => {
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
    <View style={styles.root}>
      <View style={styles.section} >
        <Formik
          innerRef={formikRef}
          initialValues={{
            department: '',
            job_title: '',
            country: '',
            city: '',
          }}
          onSubmit={async () => {}}
          validationSchema={employmentValidtaionSchema}>
          {(formikProps) => (
            <Fragment>
              <DefaultInput
                name="department"
                placeholder="Department"
                formikProps={formikProps}
                style={styles.inputs}
              />
              <DefaultInput
                name="job_title"
                placeholder="Job title"
                formikProps={formikProps}
                style={styles.inputs}
              />
              <DefaultInput
                name="country"
                placeholder="Country"
                formikProps={formikProps}
                style={styles.inputs}
              />
              <DefaultInput
                name="city"
                placeholder="City"
                formikProps={formikProps}
                style={styles.inputs}
              />
            </Fragment>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
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
});
