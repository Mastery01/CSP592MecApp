import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the College Multi Ethnic Center</Text>
      <Button
        title="Go to Calendar Screen"
        onPress={() => navigation.navigate('Calendar')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
