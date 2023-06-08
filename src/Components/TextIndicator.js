import React from 'react';
import { View, Text } from 'react-native';
import * as Styles from '../Styles/Styles';

export default ({indicator, value}) => {

    return (

        <View>

            <Text>
                <Text style={[Styles.styles.textIndicatorIndicator]}>{indicator}: </Text>
                <Text style={[Styles.styles.textIndicatorValue]}>{value}</Text>
            </Text>
            
        </View>

    );

}
