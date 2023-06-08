import React from 'react';
import { View, Text } from 'react-native';
import * as Styles from '../../Styles/Styles';
import InputLabel from '../../Components/InputLabel';
import ButtonLabel from '../../Components/ButtonLabel';

export default () => {

    return (

        <View style={[Styles.styles.appContainer]}>

            <View style={[Styles.styles.MB8]}>
                <InputLabel 
                    label="Enter your name"
                    placeholder="Marie"
                    inputMode="text"
                />
            </View>

            <View>
                <ButtonLabel
                    label="Change"
                />
            </View>

        </View>

    );

}
