import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [num, setNum] = useState(0);

  const onPressIncrement = () => {
    setNum(num + 1);
  }
  const onPressDecrement = () => {
    if (num > 0)

      setNum(num - 1);
  }
  const onPressReset = () => {
    setNum(0);
  }
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', marginTop: 200, alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', }}>React Native</Text>
        <Text style={styles.btnnum}>{num}</Text>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={onPressIncrement}><Text style={styles.btnTxt}>Increment</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onPressDecrement}><Text style={styles.btnTxt}>Decrement</Text></TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 3, marginVertical: 10 }}>
        <TouchableOpacity style={styles.btn} onPress={onPressReset}><Text style={styles.btnreset}>Reset</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
    backgroundColor: `#8a2be2`,

  },
  btncontainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnnum: {
        fontSize: 25,
    // backgroundColor:'yellow',
    // paddingLeft:5,
    // paddingRight:5,

  },
  btn: {
    // flex: 1,
    backgroundColor: '#8a2be2',
    marginHorizontal: 10,
    padding: 10,

    alignItems: 'center',


  },

  btnTxt: {
    color: 'white',
    fontSize: 16,
    padding: 5,
    width: '100%',
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
  },
  btnreset: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 5,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 20,
    width: '100%',
  },

});
