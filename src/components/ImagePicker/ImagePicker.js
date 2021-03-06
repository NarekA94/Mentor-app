import React, {useState} from 'react';
import {Image, PermissionsAndroid, Platform, View} from 'react-native';
import DefaultPicker from 'react-native-image-crop-picker';
import {Button} from '../Button/Button';

export const ImagePicker = ({getImagePath}) => {
  const [img, setImg] = useState();
  const requestCameraPermission = async () => {
    if (Platform.OS !== 'ios') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          takePhoto();
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }else{
      takePhoto()
    }
  };
  function takePhoto() {
    DefaultPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    })
      .then((image) => {
        setImg(image);
        getImagePath && getImagePath(image?.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{height: 150, padding: 20, width: 150}}>
        <Image
          style={{
            height: '100%',
            resizeMode: 'cover',
            borderWidth: 1,
            width: '100%',
            borderRadius: 100,
          }}
          source={{
            uri:
              img?.path ||
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMj5Jt7LQ0OQSdpmi02mQyidiU5qLDV0o6g&usqp=CAU',
          }}
        />
      </View>
      <Button onPress={requestCameraPermission} name="Take photo" />
    </View>
  );
};
