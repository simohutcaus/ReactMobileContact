import React from 'react'
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { ICON_SIZE } from './styles';
import colors from '../../Config/Colors';
import { toPhoneNumber } from '../../Helpers/String'
import Row from './Row';


const Actions = ({ email, cell, phone }) => {
    return (
        <View style={styles.actionContainer}>
            <Row 
                label="email"
                body={email}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-mail',
                        androidIcon: 'md-mail'
                    }
                ]}
            />
            <Row
                label="Phone"
                body={cell}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'md-call'
                    }
                ]}
                />
            <Row
                label="Home"
                body={phone}
                actions={[
                    {
                        onPress: () => null,
                        iosIcon: 'ios-call',
                        androidIcon: 'md-call'
                    }
                ]}
                />

        </View>
    )
}

export default Actions;