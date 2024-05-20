import React from 'react';
import {FlatList, View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  // Add more items as needed
];

const renderItem = ({item, navigation}) => {
  return (
    <View style={styles.item}>
      <Button
        title={item.title}
        onPress={() =>
          navigation.navigate('MovieDetails', {
            title: 'Movie Title',
            description: 'Movie Description',
            imageUri: 'URL of Image',
          })
        }
      />
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation(); // Get navigation object using useNavigation hook

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => renderItem({item, navigation})} // Pass item and navigation as parameters
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
