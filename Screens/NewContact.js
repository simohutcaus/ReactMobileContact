import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CustomTextInput from '../Components/TextInput/TextInput';
import colors from '../Config/Colors';

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod)
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: colors.background }}>
        <CustomTextInput
        placeholder="First Name..."
        onChangeText={(text) => this.onInputChange(text, 'firstName')}
        />
        <CustomTextInput
        placeholder="Last Name..."
        onChangeText={(text) => this.onInputChange(text, 'lastName')}
        />
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

export default NewContact;
