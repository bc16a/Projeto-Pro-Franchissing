/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
    
     
     
          <View style={styles.body}>

            <View style={styles.sectionContainer}>

              <Text style={{ marginBottom:'20%'}} > 
                  <Text style={{color:'#FF0000', textAlign:'center', fontSize:22, fontWeight:'bold'}}>ACCLAMONS LE LIBERATEUR </Text>
              </Text>

              <Text  style={{   alignContent:'center', alignItems:'center'}}> 
                 <Text  style={{color:'#FF0000', textAlign:'center',alignSelf:'center', fontSize:22, fontWeight:'bold'}}>PAR DES </Text> 
              </Text>

              <Text  style={{ marginBottom:'40%', alignContent:'center', alignItems:'center'}}> 
                <Text  style={{color:'#FF0000', textAlign:'center',alignSelf:'center', fontSize:22, fontWeight:'bold'}}>CANTIQUES NOUVEAUX </Text> 
               </Text>

              <Text >

                <Text  style={{color:'#FF0000', textAlign:'center'}}>Entretenez-vous par des Psaumes, par des</Text>
                </Text>
                
                <Text >
                <Text  style={{color:'#FF0000', textAlign:'center'}}>Hymmes et par des Cantiques Spirituels </Text>
                </Text>
                
                <Text  >
                <Text  style={{color:'#FF0000', textAlign:'center'}}>Chantant et par célébrant de tout votre coeur les </Text>
                </Text>

                <Text style={{ marginBottom:'35%'}}>
                <Text  style={{color:'#FF0000', textAlign:'center'}}>Louanges du Seigneur</Text> 

                </Text>

                <Text  style={{ marginBottom:'5%'}}>

                <Text  style={{color:'#FF0000', textAlign:'center'}}>Ephésiens 5 v 19 </Text> 

                </Text>

            </View>
            
           
          </View>
    
    </>
  );
};

const styles = StyleSheet.create({


  body: {
    backgroundColor: '#000080',
    width:'100%',
    height:'100%'
  },
  sectionContainer: {
    marginTop: 32,
    //alignContent:'center',
  
    alignItems:'center',
   // alignSelf:'center',
    paddingHorizontal: 24,
  },

});

export default App;
