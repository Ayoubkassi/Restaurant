import React , { useRef , useState , useEffect} from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text , TouchableOpacity } from '../../components/typography/text.component';

const ProfileCamera = styled(Camera)`
  width : 100%;
  height : 100%;
`;


export const CameraScreen = () => {
  const [ hasPermission , setHasPermission ] = useState(null);
  const cameraRef = useRef();

  const snap = async () => {
    if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync();
        con
    }
  }

  useeffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionAsync();
        setHasPermission(status === 'granted');
      })();
  }, []);

  if(hasPermission === null){
    return <View />;
  }

  if(hasPermission === false){
    return
    <Text>No Access to Camera</Text>
  }
  return(
    <TouchableOpacity
    onPress={snap}
    >
      <ProfileCamera
      ref={(camera) => (cameraRef.current = camera )}
      type={Camera.Constants.TYpe.front}
      >
      </ProfileCamera>
      </TouchableOpacity>
  );
}
