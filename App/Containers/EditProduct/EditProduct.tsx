import React from 'react'
import { View, Text, TouchableOpacity, Alert, SafeAreaView, TextInput } from 'react-native'; 
import styles from './EditProductStyles';
import { ProductService } from '../../services/Rest/ProductService'; 
import ProductModel from '../../models/ProductModel';  
import {  getToken } from '../Auth/Auth';
import NumericInput from 'react-native-numeric-input'
interface Props {
  navigation: any
}

export default class EditProduct extends React.Component<Props>{

  constructor(props: Props) {
    super(props);
  }

  state = {
    Product: new ProductModel(),
    token: '',
  }
 
  componentWillMount(){
    const Product = this.props.navigation.getParam('product') 
    this.setState({ Product })
  }

  componentDidMount() {
    const Product = this.props.navigation.getParam('product') 
    this.setState({ Product }) 
  }

  onChangeState(value: any, field: string) { 
    const ProductModel = this.state.Product
    if (field == 'name') {
      ProductModel.name = value
    } else if (field == 'price') {
      ProductModel.price = Number(value)
    } else if (field == 'image') {
      ProductModel.image = value
    } 
    this.setState({ ProductModel })
  }

  saveProduct() {
    this.setParam()
    const Product = this.state.Product
    if (Product.name && Product.price && Product.image) {
      if (Product.ingredients) {
        this.save()
      } else {
        Alert.alert("Por favor add pelo menos un ingredient...");
      } 
    } else {
      Alert.alert("Por favor preenche todos os campos...");
    }
  }

  setParam() {
    const ingredients = this.props.navigation.getParam('ingredients') 
    if (ingredients) {
      const Product = this.state.Product
      Product.ingredients = ingredients
      this.setState({ Product })
    }
    getToken().then((token) => this.setState({ token }))
  }

  addIngredients() {
    const Product = this.state.Product
    if (Product.name && Product.price && Product.image) {
      this.setParam()
      this.props.navigation.navigate('IngredientScreen', { ingredients: this.state.Product.ingredients , page:'edit' })
    } else {
      Alert.alert("Por favor preenche todos os campos...");
    }
  }

  save() {
    const productService = new ProductService()
    productService.save_updatePruduct(this.state.token, this.state.Product).then(res => { 
      if(res.status==200) {
        Alert.alert('Editar com Sucesso')
      } else {
        Alert.alert("Falhar", 'Erro')
      } 
    }).catch(err => Alert.alert("Produtos", err.toString()))
  }

  render() { 
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.onChangeState(name, 'name')}
          value={this.state.Product.name}
          placeholder="Name"
        />

        <TextInput
          style={styles.input}
          onChangeText={(image) => this.onChangeState(image, 'image')}
          value={this.state.Product.image}
          placeholder="Image"
        />
  <Text>Price</Text>
        <NumericInput
          onChange={(price) => this.onChangeState(price, 'price')}
          value={this.state.Product.price}
          type='up-down'
          valueType='real'
        />

        <View style={{ flexDirection: 'column', margin: '5%' }}>
          <View style={styles.ListButtonView}>
            <TouchableOpacity onPress={() => this.addIngredients()}>
              <Text style={styles.ToucheText}>List of Ingredient</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BlockButtonView}>
          <View style={styles.CancelButtonView}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
              <Text style={styles.ToucheText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SaveButtonView}>
            <TouchableOpacity onPress={() => this.saveProduct()}>
              <Text style={styles.ToucheText}>Salvar</Text>
            </TouchableOpacity>
          </View>
          </View>
       
          </View>
      </SafeAreaView>
    );
  }
}


