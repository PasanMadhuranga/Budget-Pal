import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const PopupMenu = ({ isVisible = true, onClose }) => {
    const handleMenuPress = (action) => {
        console.log(action);
        // Perform action if needed
        onClose(); // Close the popup menu
    };

    return (
        <View style={[styles.popupContainer, { display: isVisible ? 'flex' : 'none' }]}>
            {/* First Row */}
            <View style={styles.row}>
                <View>
                    <TouchableOpacity onPress={() => handleMenuPress('Action 1')} style={[styles.menuItem, { backgroundColor: colors.mint }]}>
                        <MaterialCommunityIcons name="account" size={120} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>Profile</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleMenuPress('Action 2')} style={[styles.menuItem, { backgroundColor: colors.pink }]}>
                        <MaterialCommunityIcons name="cog" size={120} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>Settings</Text>
                </View>
            </View>

            {/* Second Row */}
            <View style={styles.row}>
                <View>
                    <TouchableOpacity onPress={() => handleMenuPress('Action 3')} style={[styles.menuItem, { backgroundColor: colors.purple }]}>
                        <MaterialCommunityIcons name="piggy-bank" size={120} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>Goals</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleMenuPress('Action 4')} style={[styles.menuItem, { backgroundColor: colors.beige }]}>
                        <MaterialCommunityIcons name="finance" size={120} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>Budget Planning</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    popupContainer: {
        position: 'absolute',
        top: 150,
        right: 0,
        left: 0,

        paddingBottom: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // semi-transparent background

    },
    row: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150, // Adjust width for each menu item
        height: 150, // Adjust height for each menu item
        borderRadius: 75,
        margin: 18,
        padding: 10,
        elevation: 5, // for Android shadow
        shadowColor: colors.dark, // for iOS shadow
        shadowOpacity: 0.4, // for iOS shadow
        shadowOffset: { width: 1, height: 1 }, // for iOS shadow
    },
    menuText: {
        marginTop: 8,
        fontSize: 18,
        color: colors.black,
        textAlign: 'center',
    },
});

export default PopupMenu;
