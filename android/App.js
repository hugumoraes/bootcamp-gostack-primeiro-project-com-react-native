import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fffc',
  },
});

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Welcome to react native!</Text>
      </View>
    </>
  );
}
