import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const H3 = ({children, style}) => {
  return <Text style={[styles.root, style]}> {children}</Text>;
};

const styles = StyleSheet.create({
  root: {
    fontSize: 17,
    fontWeight: "700",
    marginVertical: 5
  },
});


