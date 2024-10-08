import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../AppText';

function ErrorMesage({error,visible}) {
    if (!visible || !error) return null;
    return (
        <AppText style={styles.error} >{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error:{color:'red'}
})

export default ErrorMesage;