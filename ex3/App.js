import {SafeAreaView, StyleSheet,} from 'react-native';

import SimuladorConta from './components/SimuladorConta'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <SimuladorConta/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center'
  }
});
