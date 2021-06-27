import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Button, TextInput, SafeAreaView, FlatList, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const API_KEY = '22259626-cf646f94d7bf37e93a1753150';


function DetailsScreen({ route, navigation }) {
  const item = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image 
          source={{uri: item.webformatURL}}
          style={{flex:1, width: 100, height:100 }}
          resizeMode="contain"

          />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;







function SearchScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [results, setResults] = React.useState([]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter search term"
      />
    </SafeAreaView>
      <Button
        title="Go"
        disabled={!text}
        onPress={()=>{
          fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${text}`)
          .then(response => response.json())
          .then(data => setResults(data))

        }}
      />
            <FlatList
        data={results.hits}
        renderItem={({item}) => 
        <Pressable
        onPress={() => navigation.navigate('Details',item)}
        >
        <Image 
          source={{uri: item.previewURL}}
          style={{width: 50, height: 50 }}
          />
        </Pressable>

      }
      />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
