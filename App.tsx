import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerSengon}>SENGON STACK</Text>
      <Text style={styles.textSengon}>A minimal React-Native stack to serve as a starting point for demos.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#200509',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 24
  },
  headerSengon: {
    color: '#F43F5E',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Inter',
    fontWeight: '700'
  },
  textSengon: {
    color: '#FECDD3',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '300'
  }
});
