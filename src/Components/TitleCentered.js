import React from 'react';
import { View, Text } from 'react-native';
import * as Styles from '../Styles/Styles';

export default ({title}) => {

    return (

        <View>
            <Text style={[Styles.styles.title]}>{title}</Text>
        </View>

    );

}
