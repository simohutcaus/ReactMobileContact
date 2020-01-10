import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.text}>
        <Text> Me Screen </Text>
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
