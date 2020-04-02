import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';

const ResultsList = ({ title, result }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >{title}</Text>
            {/* <Text>Results: {result.length} </Text> */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultDetail result={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 6
    },
    container: {
        marginBottom: 15
    }
});

export default ResultsList;