import {SafeAreaView, StyleSheet,} from 'react-native';

import SimuladorPedagio from './components/Simulador'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <SimuladorPedagio/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '##cae0c8',
    alignItems: 'center'
  }
});
