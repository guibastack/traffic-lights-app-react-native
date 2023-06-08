import React from 'react';
import { View, Text } from 'react-native';
import * as Styles from '../../Styles/Styles';
import ButtonLabel from '../../Components/ButtonLabel';
import InputLabel from '../../Components/InputLabel';

export default () => {

    return (

        <View style={[Styles.styles.appContainer]}>

            <View style={[Styles.styles.MB8]}>
                <InputLabel 
                    label="Enter your token"
                    placeholder="abcd123"
                    inputMode="text"
                />
            </View>

            <View>
                <ButtonLabel 
                    label="Ok"
                />
            </View>

        </View>

    );

}
