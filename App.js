import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import NaivePage from  './src/naive';
import RnAnimatedPage from  './src/rnanimated';

export default function App() {
  const [page, setPage] = useState(0);

  function toNaivePage(){
    setPage(0)
  }

  function toRnAnimatedPage(){
    setPage(1)
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.topbar}>
        <Button 
          style={styles.topbarButtons} mode='contained'
          onPress={toNaivePage} >
          Naive Animation
        </Button>
        <Button style={styles.topbarButtons} mode='contained'
          onPress={toRnAnimatedPage}>
          RN Animated
        </Button>
      </View>
      <View style={styles.page}>
        {page===0 && <NaivePage />}
        {page===1 && <RnAnimatedPage />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topbar: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'center',
    alignSelf:'flex-start',
    justifyContent: 'space-around',
  },
  topbarButtons:{
    marginTop: 20,
    marginBottom: 20,
  },
  page:{
    width:'100%',
    flex:1,
    backgroundColor: '#eee',
    alignItems: 'center',
  }
});
