import React from 'react'
import { View, Text,  Alert } from 'react-native';
import styles from './InitPageStyles';
import { getToken } from '../Auth/Auth';

interface Props {
  navigation: any
}

export default class InitPage extends React.Component<Props>{
 
  componentDidMount() {
  getToken().then(res => {
      if(res)
      setTimeout(() => this.props.navigation.navigate('MainScreen', { token: res }), 3000)
      else
      setTimeout(() => this.props.navigation.navigate('LoginScreen'), 3000)
  }).catch(err => Alert.alert("Erro")); 
  }

  render() {
    return (
      <View style={{ width: '100%', alignContent: 'center', alignItems: 'center' }}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.titleText}>PRO Franchising</Text>
            </View>
          </View>
      </View>
    );
  }
}
