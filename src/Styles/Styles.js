import React from 'react';
import { StyleSheet } from 'react-native';

export const headerTitleStyle = {
    fontWeight: 'bold',
    fontSize: 17,
};

export const headerShadowVisible = false;

export const styles = StyleSheet.create({

    appContainer: {

        backgroundColor: '#FFFFFF',
        padding: 16,
        flex: 1,
    
    },

    inputLabelContainer: {

        fontWeight: 'normal',
        fontSize: 14,
        marginBottom: 8,
        textTransform: 'uppercase',
    
    },

    inputLabelLabel: {

        borderWidth: 2,
        padding: 10,
        borderRadius: 12,
        borderColor: 'rgb(0, 0, 0)',
        fontSize: 16,
    
    },

    buttonLabelContainer: {

        backgroundColor: 'rgb(50, 50, 50)',
        borderRadius: 10,
        padding: 15,

    },

    buttonLabelLabel: {

        color: '#FFFFFF',
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',

    },

    MB8: {

        marginBottom: 8,

    },

    containerMark: {

        backgroundColor: 'rgb(50, 50, 50)',
        padding: 18,
        borderRadius: 20,

    },

    MB15: {

        marginBottom: 15,

    },

    MB25: {

        marginBottom: 25,

    },

    lightMark: {

        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 8,
        backgroundColor: 'rgb(100, 100, 100)',

    },

    horizontallyCentered: {

        alignItems: 'center',
        
    },

    title: {

        fontSize: 18,
        textAlign: 'center',

    },

    textIndicatorIndicator: {

        fontWeight: 'bold',
        fontSize: 16,

    },

    textIndicatorValue: {

        fontSize: 16,
        color: '#FF0000',

    },

    MB30: {

        marginBottom: 30,

    },

    redLight: {

        backgroundColor: '#FF0000',

    },

    yellowLight: {

        backgroundColor: '#FFAA00',

    },

    greenLight: {

        backgroundColor: '#00FF00',

    }

});
