import React from 'react';
import { View, Text } from 'react-native';
import * as Styles from '../../Styles/Styles';
import MapTrafficLight from '../../Components/MapTrafficLight';
import TitleCentered from '../../Components/TitleCentered';
import TextIndicator from '../../Components/TextIndicator';
import ButtonLabel from '../../Components/ButtonLabel';
import InputLabel from '../../Components/InputLabel';

export default () => {

    return (

        <View style={[Styles.styles.appContainer]}>
            
            <View style={[Styles.styles.MB25]}>
                <TitleCentered
                    title="For better location accuracy, get as close as you can to the traffic light to be mapped."/>
            </View>

            <View style={[Styles.styles.MB25, Styles.styles.horizontallyCentered]}>

                <View>
                    <TextIndicator indicator="Latitude" value="0"/>
                </View>

                <View>
                    <TextIndicator indicator="Longitude" value="0"/>
                </View>

            </View>

            <View style={[Styles.styles.horizontallyCentered, Styles.styles.MB15]}>
                <MapTrafficLight/>
            </View>

            <View style={[Styles.styles.MB8]}>
                <InputLabel placeholder="Ex. Crossing between 1st Street and 2nd Street."/>
            </View>

            <View>
                <ButtonLabel label="Map"/>
            </View>

        </View>

    );

}
