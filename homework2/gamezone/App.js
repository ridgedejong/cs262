import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
  } 
  else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}

// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default function App() {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://cs262-monopoly-service.herokuapp.com/players/')
//         .then((response) => response.json())
//         .then((json) => setData(json))
//         .catch((error) => console.error(error))
//         .finally(() => setLoading(false));
//   }, []);

//   return (
//       <View style={{ flex: 1, padding: 24 }}>
//         {isLoading ? <ActivityIndicator/> : (
//             <FlatList
//                 data={data}
//                 keyExtractor={({ id }, index) => id.toString()}
//                 renderItem={({ item }) => (
//                     <Text>{item.id}, {item.email}, {item.name}</Text>
//                 )}
//             />
//         )}
//       </View>
//   );
// };
