import React, { Component } from 'react'
import { View, Text, Alert, ScrollView, Modal, TouchableOpacity, TextInput, SafeAreaView, Button } from 'react-native';
import styles from './IngredientStyles';
import IngredientModel from '../../models/IngredientModel';
import NumericInput from 'react-native-numeric-input';
import { IconButton } from 'react-native-paper';
interface Props {
  navigation: any
}

export default class Ingredient extends React.Component<Props>{
  constructor(props: Props) {
    super(props);
  }

  state = {
    ingredients: [new IngredientModel()],
    ingredient: new IngredientModel(),
    ingredientCopia: new IngredientModel(),
    showform: false,
    editForm: false,
    modalVisible: false,
    previousPage: ''
  }

  componentDidMount() {
    const ingredients = this.props.navigation.getParam('ingredients')
    this.setState({ previousPage: this.props.navigation.getParam('page') })
    if (ingredients) {
      this.setState({ ingredients: ingredients })
    }
    else {
      const ingredients = this.state.ingredients
      ingredients.pop()
      this.setState({ ingredients: ingredients })
    }
  }

  onChangeState(value: any, field: string) {
    const ingredient = this.state.ingredient
    if (field == 'name') {
      ingredient.name = value
    } else if (field == 'cost') {
      ingredient.cost = Number(value)
    } else if (field == 'quantity') {
      ingredient.quantity = Number(value)
    }
    this.setState({ ingredient })
  }

  addIngredient() {
    const ingredient = this.state.ingredient
    if (ingredient.cost && ingredient.name && ingredient.quantity) {
      const ingredients = this.state.ingredients
      ingredients.push(ingredient)
      this.setState({ ingredients })
      this.setState({ showform: false })
      this.setState({ editForm: false })
    } else {
      Alert.alert("Por favor preenche todos os campos...");
    }
  }

  deleteIngredient(ingredient: IngredientModel, flag: string) {
    if (flag != 'N') {
      this.state.ingredients = this.state.ingredients.filter((a) => {
        return (a.cost != ingredient.cost && a.name != ingredient.name && a.quantity != ingredient.quantity)
      })
    } else {
      this.setState({ modalVisible: true })
      this.setState({ ingredient })
    }
  }

  showHideForm(showhide: string) {
    if (showhide == 'edit') {
      const ingredients = this.state.ingredients
      const ingredient = this.state.ingredientCopia
      ingredients.push(ingredient)
      this.setState({ ingredients })
    } else {
      const ingredient = new IngredientModel()
      this.setState({ ingredient })
      this.setState({ showform: !this.state.showform })
    }
    this.setState({ editForm: false })
  }

  editIngredient(ingredient: IngredientModel) {
    this.setState({ ingredient })
    this.setState({ ingredientCopia: ingredient })
    this.deleteIngredient(ingredient, 'Y')
    this.setState({ showform: !this.state.showform })
    this.setState({ editForm: true })
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  delete = () => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Comfirmar ou Cancelar');
          }}>
          <View style={{ marginTop: 22, alignContent: 'center' }}>

            <Text style={{ textAlign: 'center' }}> Tem certeza que vc quer fazer isso ? </Text>
            <View style={styles.fixToText}>

              <Button
                title="Nom"
                color="#FF4500"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
              <Button
                title="Sim"
                color="#7FFF00"
                onPress={() => {
                  this.deleteIngredient(this.state.ingredient, 'Y')
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />{/**/}
            </View>
          </View>
        </Modal>
      </View>)
  }

  inputform = () => {
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.onChangeState(name, 'name')}
          value={this.state.ingredient.name}
          placeholder="Name"
        />

        <NumericInput
          onChange={(cost) => this.onChangeState(cost, 'cost')}
          value={this.state.ingredient.cost}
          type='up-down'
          valueType='real'
        />

        <NumericInput
          onChange={(quantity) => this.onChangeState(quantity, 'quantity')}
          value={this.state.ingredient.quantity}
          type='up-down'
          valueType='integer'
        />

        {this.state.editForm ? (<View style={styles.BlockButtonView}>
          <View style={styles.CancelButtonView}>
            <TouchableOpacity onPress={() => this.showHideForm('edit')}>
              <Text style={styles.ToucheText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.OkButtonView}>
            <TouchableOpacity onPress={() => this.addIngredient()}>
              <Text style={styles.ToucheText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>) : (<View style={styles.BlockButtonView}>
          <View style={styles.CancelButtonView}>
            <TouchableOpacity onPress={() => this.showHideForm('create')}>
              <Text style={styles.ToucheText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.OkButtonView}>
            <TouchableOpacity onPress={() => this.addIngredient()}>
              <Text style={styles.ToucheText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>)}
      </SafeAreaView>
    );
  }

  ingredientList = () => {

    return (
      <View>
        <View style={styles.AddButtonView}>
          <TouchableOpacity onPress={() => this.showHideForm('add')}>
            <Text style={styles.ToucheText}>Add ingredient</Text>
          </TouchableOpacity>
        </View>
        {this.state.ingredients ? (
          <ScrollView style={{ marginBottom: 40, height: '70%' }}>
            {this.state.ingredients.map((ingredient) => (
              <View style={styles.linhaView}>

                {/* <Text style={styles.linhaText}>{ingredient.id}</Text> */}
                <View style={styles.NameText}>
                  <Text style={styles.linhaText}>{ingredient.name}</Text>
                </View>
                <View style={styles.NumeberText}>
                  <Text style={styles.linhaText}>{ingredient.cost}</Text>
                </View>
                <View style={styles.NumeberText}>

                  <Text style={styles.linhaText}>{ingredient.quantity}</Text>
                </View>
                <IconButton
                  icon={'delete'}
                  color={"red"}
                  size={20}
                  onPress={() => this.deleteIngredient(ingredient, 'N')}
                />

                <IconButton
                  icon={'pencil-outline'}
                  color={"black"}
                  size={20}
                  onPress={() => this.editIngredient(ingredient)}
                />

              </View>


            ))}
          </ScrollView>
        ) : null}

        {this.state.previousPage == "edit" && (
          <View style={styles.BlockButtonView}>
            <View style={styles.CancelButtonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProductScreen')}>
                <Text style={styles.ToucheText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.OkButtonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProductScreen', { ingredients: this.state.ingredients })}>
                <Text style={styles.ToucheText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {this.state.previousPage == "save" && (
          <View style={styles.BlockButtonView}>
            <View style={styles.CancelButtonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveProductScreen')}>
                <Text style={styles.ToucheText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.OkButtonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveProductScreen', { ingredients: this.state.ingredients })}>
                <Text style={styles.ToucheText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>)}

        {this.state.previousPage == "main" && (
          <View style={styles.BlockButtonView}>
            <View style={styles.CancelButtonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
                <Text style={styles.ToucheText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.OkButtonView}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen', { ingredients: this.state.ingredients })}>
                <Text style={styles.ToucheText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>)}


      </View>
    );
  }

  render() {
    return (
      <View>
        {this.delete()}
        {this.state.showform ? (
          <View>{this.inputform()}</View>
        ) : (
            <View>{this.ingredientList()}</View>
          )
        }
      </View>
    )
  }
}

