import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                style={styles.iconStyle}
                name='search' />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 25,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        // borderWidth: 1,
        // borderColor: 'black'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;