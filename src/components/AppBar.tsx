import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AppBar: React.FC = () => {
  const navigation = useNavigation();
  const [canGoBack, setCanGoBack] = useState(navigation.canGoBack());
  const handleBackPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
    setCanGoBack(navigation.canGoBack());
  }, [setCanGoBack, navigation]);
  return (
    <View style={styles.container}>
      {canGoBack ? (
        <TouchableOpacity onPress={handleBackPress} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>
          {canGoBack ? 'Watch Trailer' : 'Latest'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#060606',
    opacity: 0.8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default AppBar;
