import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './Styles';
import { capitalizeFirstLetter } from '../../Helpers/String';
import colors from '../../Config/Colors';



const ListItem = ({ contact, onPress}) => {
    const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`
    return (
        <TouchableHighlight onPress={onPress} underlayColor={colors.rowUnderlay}>
            <View style={styles.row}>
                <Image source={{ uri: contact.picture.thumbnail} } style={styles.avatar} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{contact.email}</Text>
                </View>
                <View style={styles.chevronContainer}>
                    <Icon name="ios-arrow-forward" size={CHEVRON_SIZE} color={colors.subtleText} style={styles.chevron} />
                </View>
            </View>
        </TouchableHighlight>
    )
}

const style2 = StyleSheet.create({
    height: {
        paddingTop: 50
    }
})



export default ListItem;
