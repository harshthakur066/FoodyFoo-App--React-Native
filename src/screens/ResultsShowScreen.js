import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  //   console.log(id);
  //   console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <Text>Please Wait...</Text>;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 180,
    borderRadius: 7,
    marginBottom: 5,
    marginLeft: 15
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
    marginLeft: 15
  }
});

export default ResultsShowScreen;
