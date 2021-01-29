import React, {useLayoutEffect, Fragment, useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import MultiSelect from 'react-native-multiple-select';
import {Formik} from 'formik';
import {DefaultInput, Loader} from '../';
import {groupValidationSchema} from './validationSchema';
import {getEmployees, signUp} from '../../store/actions/auth';

const {height} = Dimensions.get('window');

export const CreateGroup = ({group, user = {}, auth = false}) => {
  const navigation = useNavigation();
  const {employees} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState();
  const formikRef = useRef(null);
  const loaderRef = useRef();

  useLayoutEffect(() => {
    if (group) {
      formikRef?.current?.setFieldValue('group_name', group?.name);
    }
  }, [group]);

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
  useLayoutEffect(() => {
    if (!auth) {
      dispatch(getEmployees());
    }
  }, []);

  function onSelectedItemsChange(e) {
    setSelectedItems(e);
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{padding: 25}}>
        <Formik
          initialValues={{
            group_name: group?.name || '',
          }}
          innerRef={formikRef}
          validationSchema={groupValidationSchema}
          onSubmit={async (value) => {
            loaderRef?.current?.open();
            const userFields = {
              group_members: selectedItems || [],
              ...value,
              ...user,
            };
            await dispatch(signUp(userFields));
            loaderRef?.current?.close();
          }}>
          {(formikProps) => (
            <Fragment>
              <DefaultInput
                name="group_name"
                placeholder="Group Name"
                formikProps={formikProps}
                style={styles.inputs}
              />
              <MultiSelect
                hideTags
                items={employees || []}
                uniqueKey="id"
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick employees"
                searchInputPlaceholderText="Search employees..."
                displayKey="name"
                searchInputStyle={{color: '#6b4d2b'}}
                submitButtonColor="#97dfe6"
                submitButtonText="Submit"
                flatListProps={{scrollEnabled: true}}
                styleItemsContainer={{height: height * 0.42}}
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
