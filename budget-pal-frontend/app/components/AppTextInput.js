import React from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && (
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
                </View>
            )}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#D9D9D9",
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: 75,
        marginVertical: 12,
    },
    iconContainer: {
        marginRight: 10,
        padding: 10,
        alignItems: 'center', // Center icon within its container
        justifyContent: 'center',
    },
});

export default AppTextInput;
