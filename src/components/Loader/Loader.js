import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Portal, Surface, Modal} from 'react-native-paper';

export const Loader = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    open: open,
    close: close,
  }));
  function open() {
    setVisible(true);
  }
  function close() {
    setVisible(false);
  }
  return (
    <Portal>
      <Modal visible={visible}>
        <Surface style={styles.activity}>
          <ActivityIndicator color="#a1a1a1" />
        </Surface>
      </Modal>
    </Portal>
  );
});

const styles = StyleSheet.create({
  activity: {
    alignSelf: 'center',
    borderRadius: 100,
    elevation: 50,
    padding: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
