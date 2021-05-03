import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'; 
import styles from './SaveIngredientStyles';  
import IngredientModel from '../../models/IngredientModel';
 
interface Props {
  navigation: any
}

export default class SaveIngredient extends React.Component<Props>{

  constructor(props: Props) {
    super(props);
  }

  state = { 
    ingredient: new IngredientModel()
  }
 
  onChangeState(value: any, field: string) {
    const ingredient = this.state.ingredient
    if (field == 'name') {
      ingredient.name = value
    } else if (field == 'cost') {
      ingredient.cost = value
    } else if (field == 'quantity') {
      ingredient.quantity = value
    }
    this.setState({ ingredient })
  }

  render() {
    return (
      <SafeAreaView> 
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.onChangeState(name, 'name')}
          value={this.state.ingredient.name}
          placeholder="Name"
        />
        
        <TextInput
          style={styles.input}
          onChangeText={(cost) => this.onChangeState(cost, 'cost')}
          // value={this.state.ProductModel.price.toString()}
          placeholder="Cost"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={(quantity) => this.onChangeState(quantity, 'quantity')}
          placeholder="Quantity"
        />
 
      <View style={styles.BlockButtonView}>
        <View style={styles.CancelButtonView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('IngredientScreen')}>
              <Text style={styles.ToucheText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.OkButtonView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('IngredientScreen', { ingredient: this.state.ingredient })}>
              <Text style={styles.ToucheText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}


