import React, {useContext, useLayoutEffect} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../../../context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {httpClient} from '../../../httpClient';
import MultiSelect from 'react-native-multiple-select';

export const CreateGroup = ({navigation}) => {
  const authUser = useContext(AuthContext);
  const [emploers, setEmploers] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="checkmark-sharp"
          size={28}
          style={{marginRight: 10}}
          // onPress={handleSubmit}
        />
      ),
    });
  }, [navigation]);
  useLayoutEffect(() => {
    async function getEmploers() {
      try {
        const data = await httpClient.get('users');
        setEmploers(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getEmploers();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        ref={(component) => {
          this.multiSelect = component;
        }}
        onSelectedItemsChange={this.onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{color: '#CCC'}}
        submitButtonColor="#CCC"
        submitButtonText="Submit"
      />
    </View>
  );
};
