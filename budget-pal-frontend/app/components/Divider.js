import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const DividerComponent = () => {
    const [selectedTab, setSelectedTab] = useState('Income'); // Initial selection

    return (
        <View style={styles.divider}>
            {/* Tabs */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
                <TouchableOpacity
                    onPress={() => setSelectedTab('Income')}
                    style={[styles.tabButton, selectedTab === 'Income' && styles.selectedTab]}
                >
                    <Text style={{ fontSize: 18, fontWeight: selectedTab === 'Income' ? 'bold' : 'normal' }}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedTab('Expenses')}
                    style={[styles.tabButton, selectedTab === 'Expenses' && styles.selectedTab]}
                >
                    <Text style={{ fontSize: 18, fontWeight: selectedTab === 'Expenses' ? 'bold' : 'normal' }}>Expenses</Text>
                </TouchableOpacity>
            </View>

            {/* Render Items */}
            {/* Add your FlatList or other content here */}
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        top: 65,

    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    selectedTab: {
        backgroundColor: '#eee',  // Adjust background color for selected tab
        borderBottomWidth: 2,
    },
});

export default DividerComponent;
