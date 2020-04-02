import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, errorMessage, result] = useResults();

    const filterResultsByPrice = (price) => {
        return result.filter(result => {
            return result.price === price;
        });
    };
    console.log(result);

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmitt={() => searchApi(term)}
            />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            <Text>We have found {result.length} results. </Text>
            <ResultsList result={filterResultsByPrice('$')} title='Tight Budget?' />
            <ResultsList result={filterResultsByPrice('$$')} title='Bit Pricer' />
            <ResultsList result={filterResultsByPrice('$$$')} title='Big Spender!' />
        </View>
    );
};

export default SearchScreen;