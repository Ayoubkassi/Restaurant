import React , { useRef , useState , useEffect  , useContext} from 'react';
import { Camera } from 'expo-camera';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text , TouchableOpacity } from '../../components/typography/text.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext }  from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(Camera)`
  width : 100%;
  height : 100%;
`;


export const CameraScreen = ({ navigation }) => {
  const [ hasPermission , setHasPermission ] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if(cameraRef){
        const photo = await cameraRef.current.takePictureAsync();
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        navigation.goBack();

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
