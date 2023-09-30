import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactScreen from './screens/ContactScreen';

//Screen names
const homeName = 'Home';
const aboutName = 'about';
const settingsName = 'Settings';
const contactsName = 'Contacts';

const Tab = createBottomTabNavigator();
function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === aboutName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === contactsName) {
              iconName = focused ? 'contacts' : 'perm-contact-calendar';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0ef',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: {
            backgroundColor: '#00041b',
            padding: 10,
            height: 70,
          },
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={contactsName} component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
