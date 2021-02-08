import React, {forwardRef, useImperativeHandle} from 'react';
import {Modal, Portal, Provider} from 'react-native-paper';

export const MyModal = forwardRef(({children, continerStyle}, ref) => {
  const [visible, setVisible] = React.useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  useImperativeHandle(ref, () => ({
    open,
    close,
  }));
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={close}
          contentContainerStyle={{
            backgroundColor: 'white',
            padding: 20,
            width: "90%",
            alignSelf: "center",
            ...continerStyle,
          }}>
          {children}
        </Modal>
      </Portal>
    </Provider>
  );
});
