import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { me } from '../Config/Data';
import Header from '../Components/UserDetails/Header';
import Actions from '../Components/UserDetails/Actions'
import Info from '../Components/UserDetails/Info'

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header {...me} />
        <Actions {...me} />
        <Info {...me} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Me;
