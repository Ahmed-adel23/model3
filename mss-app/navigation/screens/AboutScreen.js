import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.aboutContent}>
        <Text style={styles.title}>
          why use <Text style={styles.aboutTitle}>multiple sclerosis</Text>
           detection?
        </Text>
        <View style={styles.titleLine}></View>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          maiores labore saepe nobis dicta qui nulla vero animi, nesciunt alias
          magni facilis assumenda aliquam facere corrupti mollitia quaerat
          dolores consequatur.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03031D',
    paddingVertical: 230,
    height: '100%',
  },
  aboutTitle: {
    color: 'rgba(25, 120, 173, 1)',
    paddingRight: 5
  },
  aboutContent: {
    padding: 20,
    paddingVertical: 30,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 2,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  titleLine: {
    width: 80,
    height: 7,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: 'rgba(25, 120, 173, 1)',
  },
  paragraph: {
    color: '#000',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'rgba(25, 120, 173, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AboutScreen;
