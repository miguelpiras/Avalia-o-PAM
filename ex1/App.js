import {SafeAreaView, StyleSheet,} from 'react-native';

import Calculadora from './components/calculadoraHora'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Calculadora/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fdf1cc',
    alignItems: 'center'
  }
});
