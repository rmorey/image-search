import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, FlatList, Image} from 'react-native';

const API_KEY = '22259626-cf646f94d7bf37e93a1753150';

export default function App() {
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
        <Image 
          source={{uri: item.previewURL}}
          style={{width: 50, height: 50}}/>
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
