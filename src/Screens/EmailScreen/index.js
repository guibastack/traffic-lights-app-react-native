import React from 'react';
import { View } from 'react-native';
import * as Styles from '../../Styles/Styles';
import InputLabel from '../../Components/InputLabel';
import ButtonLabel from '../../Components/ButtonLabel';

export default () => {

    return (

        <View style={[Styles.styles.appContainer]}>

            <InputLabel 
                label="Enter your email address"
                placeholder="example@example.com"
            />

            <ButtonLabel
                label="Ok"
            />

        </View>

    );

}
