import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = ({onPress, name, fontStyle, ...rest}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.root]}
    {...rest}>
    <Text style={[styles.text, fontStyle]}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 60,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#97dfe6',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});
