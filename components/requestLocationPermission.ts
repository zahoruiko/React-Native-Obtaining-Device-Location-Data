import { Platform } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

export const requestLocationPermission = async () => {
  try {
    const requestResult = await request(
      Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );
    if (requestResult === 'granted') {
      return true;
    } else {
      console.log('Permission request result = ', requestResult);
      return false;
    }
  } catch (error) {
    console.log('Permission request error: ', error);
    return false;
  }
};
