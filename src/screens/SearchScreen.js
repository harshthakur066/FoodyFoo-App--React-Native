import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san joes'
                }
            });
            setResult(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        };
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmitt={() => searchApi(term)}
            />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <Text>We have found {result.length} results. </Text>
        </View>
    );
};

export default SearchScreen;