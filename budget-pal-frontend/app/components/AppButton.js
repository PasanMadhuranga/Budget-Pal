import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native';

function AppButton({ title, onPress, color = 'primary' }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '75%',
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        // Shadow for Android
        elevation: 8,
    },
    text: {
        color: colors.white,
        fontSize: 22,
        //textTransform: 'uppercase',
        fontWeight: '900',
    }
})

export default AppButton;
