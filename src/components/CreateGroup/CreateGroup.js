import React, {useLayoutEffect, Fragment, useRef} from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {Formik} from 'formik';
import {DefaultInput, Loader, MultiSelect, MyModal} from '../';
import {groupValidationSchema} from './validationSchema';
import {getEmployees, signUp} from '../../store/actions/auth';
import {updateGroup} from '../../store/actions/group';
import {H3} from '../H3/H3';

const {height} = Dimensions.get('window');

export const CreateGroup = ({group, user = {}, auth = false}) => {
  const navigation = useNavigation();
  const {employees} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState();
  const formikRef = useRef(null);
  const loaderRef = useRef();
  const modalRef = useRef();
  const [groupItem, setGroupItem] = useState();
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
    dispatch(getEmployees());
  }, []);

  function onSelectedItemsChange(e) {
    setSelectedItems(e);
  }

  function handleOnLongPressItem(item) {
    setGroupItem(item);
    modalRef?.current?.open();
  }
  console.log(groupItem), console.log(user);
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
            if (!auth) {
              const userFields = {
                group_members: selectedItems || [],
                ...value,
                ...user,
              };
              await dispatch(signUp(userFields));
            } else {
              await dispatch(updateGroup(group?.id, {name: value.group_name}));
            }

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
                onLongPressItem={handleOnLongPressItem}
              />
            </Fragment>
          )}
        </Formik>
      </View>
      <Loader ref={loaderRef} />
      <MyModal ref={modalRef}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <H3>{`${user?.first_name || ''} ${user?.last_name || ''}`}</H3>
            <Text style={styles.text}>{user?.country || ''}</Text>
            <Text style={styles.text}>{user?.city || ''}</Text>
            <Text style={styles.text}>{user?.job_title || ''}</Text>
            <Text style={styles.text}>{user?.gender || ''}</Text>
          </View>
          <View>
            <H3>{groupItem?.name || ''}</H3>
            <Text style={styles.text}>{groupItem?.country || ''}</Text>
            <Text style={styles.text}>{groupItem?.city || ''}</Text>
            <Text style={styles.text}>{groupItem?.job_title || ''}</Text>
            <Text style={styles.text}>{groupItem?.gender || ''}</Text>
          </View>
        </View>
      </MyModal>
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
  text: {
    marginBottom: 5,
    paddingLeft: 10,
  },
});
