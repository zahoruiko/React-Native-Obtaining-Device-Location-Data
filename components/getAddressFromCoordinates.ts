import { HERE_API_KEY } from '@env';

export const getAddressFromCoordinates = async (latitude: number, longitude: number, setLocationName: Function) => {
  const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=en-US&apiKey=${HERE_API_KEY}`;
  console.log(url);
  const defaultResponse = latitude.toFixed(2) + ', ' + longitude.toFixed(2);

  try {
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
    if (
      resJson &&
      resJson.items &&
      resJson.items[0].address &&
      resJson.items[0].address.label
    ) {
      const locationName = resJson.items[0].address.label;
      setLocationName(locationName ?? defaultResponse);
    } else {
      setLocationName(defaultResponse);
    }
  } catch (error) {
    setLocationName(defaultResponse);
  }
}
