  
import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import { contacts } from '../Config/Data';
import colors from '../Config/Colors';
import ListItem  from '../Components/ListItem/ListItem';

class Contacts extends Component {


  constructor(props) {
    super(props);
    this.state = {
      test: contacts
    };
  }

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item)
  }

  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={this.state.test}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={(item) => item.email}
      />
    );
  }
}


export default Contacts;
