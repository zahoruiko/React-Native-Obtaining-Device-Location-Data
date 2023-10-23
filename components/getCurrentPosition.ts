import Geolocation from 'react-native-geolocation-service';
import { requestLocationPermission } from './requestLocationPermission';

export const getCurrentPosition = (setCurrentPosition: Function) => {
  requestLocationPermission().then(data => {
    if (data) {
      Geolocation.getCurrentPosition(
        position => {
          console.log('Current position: ', position);
          setCurrentPosition(position);
        },
        error => {
          console.log('Location request error: ', error.code, error.message);
          setCurrentPosition(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  });
};