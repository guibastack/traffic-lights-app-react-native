import React from 'react';
import { View, Text, TextInput } from 'react-native';
import * as Styles from '../Styles/Styles';

export default ({label, placeholder, inputMode}) => {

    return (

        <View>
            
            <Text style={[Styles.styles.inputLabelContainer]}>{label}</Text>

            <View>
                <TextInput 
                    style={[Styles.styles.inputLabelLabel]}
                    placeholder={placeholder}
                    inputMode={inputMode}
                />
            </View>

        </View>

    );

}
