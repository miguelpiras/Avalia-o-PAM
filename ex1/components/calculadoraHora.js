import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const horasExtra = (props) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');


  const horanormais = 160;
  const hora = parseFloat(num2) + horanormais
  const [resultado, setResultado] = useState('');

  return (
    <View style={StyleSheet}>
      <Text>Salário</Text>
      <TextInput
        value={num1}
        onChangeText={setNum1}
        style={estilos.input}
        placeholder="Salario Base"
        keyboardType="numeric"
      />
      <TextInput
        value={num2}
        onChangeText={setNum2}
        style={estilos.input}
        placeholder="Horas extra feitas"
        keyboardType="numeric"
      />

      <View style={estilos.button}>
        <Button
          title=" Calcular "
          onPress={() => {
            const salario = parseFloat(num1);
            const horasExtra = parseFloat(num2);
            const resultadoFinal =
              (salario / horanormais) * 1.5 * horasExtra + salario;
            setResultado(resultadoFinal.toFixed(2));
          }}
        />
      </View>


      <Text style={estilos.text}>Salário: {num1}</Text>
      <Text style={estilos.text}>Horas Totais: {horanormais}</Text>
      <Text style={estilos.text}>Horas Extras: {hora}</Text>
      <Text style={estilos.text}>Salário Total: {resultado}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  input: {
    backgroundColor: '#f7e6be',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    padding: 8,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    marginTop: 5,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign:'center',
    borderRadius: 20,
    width:10,
    fontSize: 10,
    },
  text: {
    fontSize: 20

  },
});


export default horasExtra;
