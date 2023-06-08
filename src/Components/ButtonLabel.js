import React from 'react';
import { Pressable, View, Text } from 'react-native';
import * as Styles from '../Styles/Styles';

export default ({label}) => {

    return (

        <View>

            <Pressable style={[Styles.styles.buttonLabelContainer]}>
                <Text style={[Styles.styles.buttonLabelLabel]}>{label}</Text>
            </Pressable>

        </View>

    );

}
