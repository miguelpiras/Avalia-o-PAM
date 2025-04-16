import {View, StyleSheet } from 'react-native'

import Quadrado from './quadrado'

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <Quadrado cor="#FFF" lado={40} lado1={40}/>          
      <Quadrado cor="#000" lado={40} lado1={40}/> 
      <Quadrado cor="#FFF" lado={40} lado1={40}/>
      <Quadrado cor="#000" lado={40} lado1={40}/>
      <Quadrado cor="#FFF" lado={40} lado1={40}/>          
      <Quadrado cor="#000" lado={40} lado1={40}/> 
      <Quadrado cor="#FFF" lado={40} lado1={40}/>
      <Quadrado cor="#000" lado={40} lado1={40}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#784000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'column'
  }
})

export default FlexBox