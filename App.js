import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const API_KEY = "22259626-cf646f94d7bf37e93a1753150";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SearchScreen({ navigation }) {
  const [query, onChangeQuery] = React.useState(null);
  const [results, setResults] = React.useState([]);
  function fetchResults() {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);

        console.log(data);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
          },
        ]}
      >
        <TextInput
          style={styles.input}
          returnKeyType="search"
          autoFocus={true}
          onChangeText={onChangeQuery}
          onSubmitEditing={() => fetchResults()}
          placeholder="Enter Search Term"
        />
        <Button title="Go" disabled={!query} onPress={() => fetchResults()} />
      </View>

      <FlatList
        style={styles.list}
        data={results.hits}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Details", item)}>
            <Image
              source={{ uri: item.previewURL }}
              style={{ width: 50, height: 50 }}
            />
          </Pressable>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function DetailsScreen({ route, navigation }) {
  const item = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Posted by {item.user}</Text>
      <Text>{item.tags}</Text>
      <Image
        source={{ uri: item.webformatURL }}
        style={{ flex: 1, width: 100, height: 100 }}
        resizeMode="contain"
      />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  list: {
    padding: 10,
  },
});
