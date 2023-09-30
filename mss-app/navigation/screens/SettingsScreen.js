import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Import your React Native components for Upload1, Upload2, Upload3, and Upload4 here
import Model1 from '../../components/model1'
function Test() {
  const [selectedComponent, setSelectedComponent] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Test Page</Text>
        <Button
          style={styles.modelButton}
          title="Model 1"
          onPress={() => setSelectedComponent(1)}
        />
        <Button
          style={styles.modelButton}
          title="Model 2"
          onPress={() => setSelectedComponent(2)}
        />
        <Button
          style={styles.modelButton}
          title="Model 3"
          onPress={() => setSelectedComponent(3)}
        />
        <Button
          style={styles.modelButton}
          title="Model 4"
          onPress={() => setSelectedComponent(4)}
        />
      </View>

      {selectedComponent === 1 && <Model1 />}
      {selectedComponent === 2 && <Model1 />}
      {selectedComponent === 3 && <Model1 />}
      {selectedComponent === 4 && <Model1 />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(3, 3, 29)',
    paddingVertical: 30,
    height: '100%',
    color: 'white'
  },
  buttonContainer: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white'
  },

  modelButton: {
    height: 60,
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    backgroundColor:
      'linear-gradient(90deg, rgba(25,120,173,1) 26%, rgba(24,141,164,1) 84%)',
  },
});

export default Test;
