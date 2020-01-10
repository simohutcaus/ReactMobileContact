  
import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import { contacts } from '../Config/Data';
import colors from '../Config/Colors';
import ListItem  from '../Components/ListItem/ListItem';

class Contacts extends Component {

  handleRowPress = (item) => {
    this.props.navigation.navigate('Details', item)
  }

  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={(item) => item.email}
      />
    );
  }
}


export default Contacts;
