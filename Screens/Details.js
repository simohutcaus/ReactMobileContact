import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../Components/UserDetails/Header';
import colors from '../Config/Colors';
import Actions from '../Components/UserDetails/Actions';
import Info from '../Components/UserDetails/Info';


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={{backgroundColor: colors.backgroundColor}}>
        <Header {...contact} />
        <Actions {...contact} />
        <Info {...contact} />
      </ScrollView>
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

export default Details;
