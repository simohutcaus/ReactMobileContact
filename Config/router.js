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

const AppNavigator = createStackNavigator({
  Contacts: {
    screen: Contacts
  },
  Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
      }),
      },

  Me: {
    screen: Me,
    navigationOptions: {
    }
  }
  },
);





export default createAppContainer(AppNavigator);