import React from 'react';
import { View, Pressable } from 'react-native';
import * as Styles from '../Styles/Styles';

export default () => {

    return (

        <View style={[Styles.styles.containerMark]}>

            <View style={[Styles.styles.MB15]}>
                <Pressable style={[Styles.styles.lightMark, Styles.styles.redLight]}></Pressable>
            </View>

            <View style={[Styles.styles.MB15]}>
                <Pressable style={[Styles.styles.lightMark, Styles.styles.yellowLight]}></Pressable>
            </View>

            <View>
                <Pressable style={[Styles.styles.lightMark, Styles.styles.greenLight]}></Pressable>
            </View>

        </View>

    );

}
