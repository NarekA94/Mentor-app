import React from 'react';
import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const DefaultSelect = ({
  style,
  form: {touched, errors, setFieldValue},
  field: {name, value},
  data,
  placeholder,
}) => {
  return (
    <View style={{marginBottom: 13}}>
      <View
        style={{
          paddingLeft: 0,
          ...style,
        }}>
        <RNPickerSelect
          onUpArrow={() => console.log('open')}
          style={{
            inputIOS: {padding: 0, height: 46, color: '#8c8c8c'},
            inputAndroid: {padding: 0, height: 46, color: '#8c8c8c'},
            placeholder: {color: '#8c8c8c'},
          }}
          value={value}
          onValueChange={(e) => {
            setFieldValue(name, e);
          }}
          placeholder={{
            label: placeholder,
            value: '',
          }}
          onOpen={() => console.log('open')}
          items={data}
        />
      </View>
      {touched[name] && errors[name] && (
        <Text
          style={{
            // height: 35,
            color: '#ee2864',
            fontSize: 12,
            paddingLeft: 15,
            paddingTop: 2,
          }}>
          {errors[name]}
        </Text>
      )}
    </View>
  );
};
