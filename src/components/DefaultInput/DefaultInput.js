import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

export const DefaultInput = ({
  label,
  formikProps,
  name,
  secureTextEntry = false,
  style,
  inputStyles,
  continerStyle,
  edit,
  ...rest
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const text = useRef();

  useEffect(() => {
    if (formikProps.touched[name] && formikProps.errors[name]) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [formikProps.touched[name], formikProps.errors[name]]);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={(styles.root, continerStyle)}>
      <View style={styles.inputTab}>
        <Animated.View
          style={{
            borderColor: '#f9447b8c',
            borderWidth: fadeAnim,
            ...style,
          }}>
          <TextInput
            ref={text}
            placeholderTextColor="#8c8c8c"
            secureTextEntry={secureTextEntry}
            onChangeText={formikProps.handleChange(name)}
            onBlur={formikProps.handleBlur(name)}
            value={`${formikProps.values[name]}`}
            defaultValue={`${formikProps.values[name]}`}
            autoCapitalize="none"
            style={{
              width: '100%',
              ...inputStyles,
            }}
            {...rest}
          />
        </Animated.View>

        {formikProps.touched[name] && formikProps.errors[name] && (
          <Text
            style={{
              color: '#ee2864',
              fontSize: 12,
              paddingLeft: 15,
              paddingTop: 2,
            }}>
            {formikProps.errors[name]}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    minWidth: '100%',
    width: '100%',
    position: 'relative',
  },
  inputTab: {
    minWidth: '100%',
    width: '100%',
    marginBottom: 13,
  },
  iconTab: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: -10,
    bottom: 0,
  },
  errorMessage: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#000',
  },
});


