import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar/>
      <Button
        title="Go"
      />
      <StatusBar style="auto" />
    </View>
  );
}


const SearchBar = () => {
  const [text, onChangeText] = React.useState(null);


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter search term"
      />
    </SafeAreaView>
  );
};
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
