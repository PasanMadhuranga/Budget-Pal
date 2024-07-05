import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors'; // Assuming you have a colors file for consistency

const PopupMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMenuPress = (action) => {
        console.log(action);
        // Close the popup menu or perform action
        setIsVisible(false);
    };

    const toggleMenu = () => {
        setIsVisible(!isVisible); // Toggle the visibility of the popup menu
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
                <MaterialCommunityIcons name="menu" size={30} color={colors.medium} />
            </TouchableOpacity>

            {isVisible && (
                <View style={styles.popupContainer}>
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
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,

    },
    menuIcon: {
        position: 'absolute',
        marginTop: 0,
        top: 0,
        right: 0,
        padding: 10,
        backgroundColor: colors.light,
    },
    popupContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        marginTop: 15,
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
        margin: 10,
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
