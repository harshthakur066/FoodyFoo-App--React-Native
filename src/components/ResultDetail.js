import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name} > {result.name} </Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 350,
        height: 180,
        borderRadius: 7,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ResultDetail;