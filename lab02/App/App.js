import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

let newAge = 0;

export default function App() {
  const [name, setName] = useState('______');
  const [birthdays, setBirthdays] = useState([]);

  const clickHandler = () => {
    newAge += 1;
    setBirthdays(birthdays.concat({key: newAge.toString()}));
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)} />
      <Text>{name} is {newAge} years old.</Text>

      <View style={styles.buttonContainer}>
        <Button color='#fff' title='Birthday' onPress={clickHandler} />
      </View>
      <FlatList 
        data={birthdays}
        renderItem={({item}) => (
          <Text>{item.key}</Text>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#7C00ff',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});

