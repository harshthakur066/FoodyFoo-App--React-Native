import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ResultsList = ({ title, result }) => {
    return (
        <View>
            <Text style={styles.title} >{title}</Text>
            {/* <Text>Results: {result.length} </Text> */}
            <FlatList
                horizontal
                data={result}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <Text> {item.name} </Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ResultsList;