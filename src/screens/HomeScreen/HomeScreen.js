import React, {Fragment} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const HomeScreen = () => {
  return (
    <Fragment>
      <View style={styles.root}>
          <Text>
              Home
          </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
