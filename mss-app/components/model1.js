import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function Upload1() {
  const [imageUri, setImageUri] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  const handleSubmit = async () => {
    // Handle image upload and prediction here
    // You would typically use an API to send the image and get predictions in response
    // Make sure to handle errors appropriately
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Upload Your Photo for Model 1</Text>
        <TouchableOpacity onPress={handleImageUpload}>
          <View style={styles.imageContainer}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
              <Image source={require('../assets/download.svg')} style={styles.image} />
            )}
            <Text style={styles.imageText}>Tap to select an image</Text>
          </View>
        </TouchableOpacity>
        <Button title="Predict" onPress={handleSubmit} disabled={!imageUri} />
        {prediction && <Text style={styles.prediction}>Prediction: {prediction}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(3, 3, 29)',
    paddingHorizontal: 20,
    color: 'white' ,borderColor: 'rgba(50, 146, 224, 0.788)' ,
     borderStyle: 'dotted' ,
    borderWidth: 1 

  },
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 'auto'
  },
  image: {
    width: 80,
    height: 80,
  },
  imageText: {
    marginTop: 10,
    color: 'white',
  },
  prediction: {
    marginTop: 20,
    color: 'white',
  },
});

export default Upload1;
