import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://hidden-basin-48937.herokuapp.com/playergame/')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);
  
    return (
        <View style={globalStyles.container}>
          <Text>PlayerGame Entries</Text>  
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ key }, index) => key.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.key}</Text>
                        </Card>
                    </TouchableOpacity>
                  )}
              />
          )}
        </View>
    );

}
