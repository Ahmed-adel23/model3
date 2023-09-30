import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

export default function HomeScreen({ navigation }) {
  const data = [
    { title: 'Event 1', description: 'Event 1 Description' },
    { title: 'Event 2', description: 'Event 2 Description' },
    { title: 'Event 3', description: 'Event 3 Description' },
    { title: 'Event 4', description: 'Event 4 Description' },
    { title: 'Event 5', description: 'Event 5 Description' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.homeTitle}>
            Hi, welcome to our website to make MS detection
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Make Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>About Us</Text>
            </TouchableOpacity>
          </View>

          {/* Repeated text and buttons removed for brevity */}

          <View>
            <Timeline
              data={data}
              circleSize={30}
              circleColor="rgb(45,156,219)"
              lineColor="rgb(45,156,219)"
              descriptionStyle={{ color: 'gray' }}
              options={{
                style: { paddingTop: 59 },
              }}
              isUsingFlatlist={true}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 50,
    paddingBottom: 10,
    paddingHorizontal: 5
  },
  row: {
    marginVertical: 50
  },
  column: {
    flex: 1,
    paddingHorizontal:5
  },
  homeTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal:10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'rgba(25,120,173,1)',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
