import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { getAddressFromCoordinates } from './components/getAddressFromCoordinates';
import { getCurrentPosition } from './components/getCurrentPosition';

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(false);
  const [currentPositionName, setCurrentPositionName] = useState();

  useEffect(() => {
    currentPosition &&
      getAddressFromCoordinates(
        currentPosition.coords.latitude,
        currentPosition.coords.longitude,
        setCurrentPositionName
      );
  }, [currentPosition]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Get current position"
            onPress={() => getCurrentPosition(setCurrentPosition)}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Latitude:</Text>
          <Text style={styles.rowData}>{currentPosition ? currentPosition.coords.latitude : null}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>Longitude:</Text>
          <Text style={styles.rowData}>{currentPosition ? currentPosition.coords.longitude : null}</Text>
        </View>
        {currentPositionName && (
          <View style={styles.row}>
            <Text style={styles.rowTitle}>Current address:</Text>
            <Text style={styles.rowData}>{currentPositionName}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: 300,
    flexDirection: 'column'
  },
  buttonContainer: {
    marginBottom: 10
  },
  button: {
    height: 30,
    backgroundColor: 'blue',
    borderWidth: 1,
    borderBlockColor: 'blue'
  },
  row: {
    flexDirection: 'row'
  },
  rowTitle: {
    flex: 1,
    fontSize: 18,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowData: {
    flex: 2,
    fontSize: 18,
    padding: 5,
    marginBottom: 5,
    marginLeft: 5,
    backgroundColor: '#eee',
    justifyContent: 'center'
  }
});

export default App;
