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

    }

});
