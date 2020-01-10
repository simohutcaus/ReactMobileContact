import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Contacts from '../Screens/Contacts';
import Details from '../Screens/Details';
import { capitalizeFirstLetter } from '../Helpers/String';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import NewContact from '../Screens/NewContact';
import Me from '../Screens/Me';
import ContactsStack from './router';

const TabNavigator = createBottomTabNavigator({
    Contacts: {
        screen: ContactsStack,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        }
    },
    NewContact: {
      screen: NewContact,
      navigationOptions: {
        tabBarLabel: 'New Contact',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />
    }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />
    }  
    }
  });
  
  export default createAppContainer(TabNavigator);