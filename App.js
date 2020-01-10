import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contacts from './Screens/Contacts'
import  ContactsStack  from './Config/router';
import TabRouter from './Config/tabRouter';

export default function App() {
  return (
    <View style={styles.container}>
      <TabRouter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
