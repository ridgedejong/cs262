import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'great game', key: '1'},
        {title: 'Gotta Catch Them All (again)', rating: 4, body: 'good game', key: '2'},
        {title: 'Not So "Final" Fantasy', rating: 3, body: 'decent game', key: '3'}
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}
