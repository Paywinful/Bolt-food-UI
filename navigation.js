import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/home';
import Profile from './screens/profile';
import History from './screens/history';
import Search from './screens/search';


const Tab = createBottomTabNavigator();


export default function navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused 
              ? 'ios-search' 
              : 'search-outline';
            } else if (route.name === 'History') {
              iconName = focused 
              ? 'ios-bookmark'
              : 'ios-bookmark-outline'
            } else if (route.name === 'Profile') {
              iconName = focused 
              ? 'person'
              : 'person-outline'
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} style={styles.icon} />;
          }, 

          tabBarShowLabel: false,

          headerShown : false,
          })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'black',
  },
});
