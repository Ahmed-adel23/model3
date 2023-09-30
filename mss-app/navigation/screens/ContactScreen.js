import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons"; 

function AboutTeamScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contact}>
        <Text style={styles.contactText}> Contact with the team now </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.team}>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </View>
    </ScrollView>
  );
}

function TeamMember() {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/photo1694638506.jpeg')} style={styles.imgCard} />
      <Text style={styles.cardTitle}>Ahmed Adel</Text>
      <Text style={styles.cardText}>Faculty of Computers and Informatics, Zagazig University</Text>
      <View style={styles.teamIcons}>
        <TouchableOpacity>
          <FontAwesome name="facebook-square" style={styles.teamIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-linkedin" style={styles.teamIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="instagram" style={styles.teamIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03031D',
    minHeight: '100%',
  },
  contact: {
    backgroundColor: 'rgb(3, 3, 29)',
    paddingVertical: 320,
    alignItems: 'center',
  },
  contactText: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 28,
    marginHorizontal:2
  },
  button: {
    backgroundColor: 'rgba(25, 120, 173, 1)',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  team: {
    flex:1,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    width: '75%',
    alignItems: 'center',
    marginHorizontal: 'auto',
    textAlign: 'center',
    paddingVertical: 20 
    },
  imgCard: {
    width: 100,
    height: 100,
    borderWidth: 7,
    borderColor: 'rgba(50, 146, 224, 0.788)',
    borderRadius: 75,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center'
  },
  teamIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
    color: 'blue'
  },
  teamIcon: {
    fontSize: 30,
    color:'rgb(25, 120, 173)'
  },
});

export default AboutTeamScreen;
