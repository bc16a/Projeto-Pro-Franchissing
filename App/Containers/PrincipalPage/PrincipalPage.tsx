import React from 'react'
import { View, Text, TouchableOpacity, Alert, Image, Modal, ScrollView, Button } from 'react-native';
import { Caption, IconButton } from 'react-native-paper';
import styles from './PrincipalPageStyles';
import { ProductService } from '../../services/Rest/ProductService';
import PageProductModel from '../../models/PageProductModel'; 
import NumericInput from 'react-native-numeric-input';
import { getToken } from '../Auth/Auth'; 
interface Props {
  navigation: any
}

export default class PrincipalPage extends React.Component<Props>{

  constructor(props: Props) {
    super(props);
  }

  state = {
    pageProductModel: new PageProductModel(),
    id: 0,
    modalVisible: false,
    token: '',
    size: 10
  }

  componentDidMount() {
    this.gettoken()
  }

  gettoken() {
    getToken().then(token => {
      if (token) {
        this.setState({ token })
        this.getListProduct(this.state.token, this.state.size)
      }
    }).catch(err => Alert.alert("Erro"));

  }


  getListProduct(token: string, size: any) {
    console.log(size, "token valido", token)
    const productService = new ProductService()
    productService.ProductList(token, size).then(pageProductModel => {
      console.log('pageProductModel', pageProductModel)
      this.setState({ pageProductModel: pageProductModel })
    }).catch(err => Alert.alert("Produtos", err.toString()))
  }

  deleteProduct(id, flag: string) {
    if (flag != 'N') {
      const productService = new ProductService()
      const token = this.props.navigation.getParam('token')
      console.log("teste de token", token)
      this.setState({ token })
      productService.deleteProduct(token, id).then(res => {
        if (res.status == 200) {
          this.componentDidMount()
          Alert.alert('Excluir com Sucesso')
        } else {
          Alert.alert("Falhar", 'Erro')
        }
      }).catch(err => Alert.alert("Produtos", err.toString()))
    } else {
      this.setState({ id })
      this.setState({ modalVisible: true })
    }
  }


  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onChangeState(value: any, field: string) {

    if (field == 'size') {
      this.state.size = value
      this.setState({ size: value })
      this.gettoken()
    }

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
                onPress={async () => {
                  this.deleteProduct(this.state.id, 'Y')
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />{/**/}
            </View>
          </View>
        </Modal>
      </View>)
  }

  render() {
    console.log(this.state.pageProductModel.content)
    return (
      <View style={{ flex: 1 }}>
        {this.delete()}
        <View style={styles.HeadStyle}>
          <View >
            <Text>Size</Text>
            <NumericInput
              onChange={(size) => this.onChangeState(size, 'size')}
              value={this.state.size}
              type='up-down'
              valueType='integer'
            />
          </View>
          <View style={styles.AddStyle}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveProductScreen')}>
              <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Add Product</Text>
            </TouchableOpacity>
          </View></View>
        <View style={{ flex: 1, alignItems: 'center' }}>

          {this.state.pageProductModel.content ? (
            <ScrollView>
              {
                this.state.pageProductModel.content.map((product, index) => (
                  <View style={{ flexDirection: 'row', width: '100%' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('IngredientScreen', { ingredients: product.ingredients, page: 'main' })}
                      style={styles.ImageStyle}>
                      <Image style={{ width: 40, height: 40 }} source={{ uri: product.image }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('IngredientScreen', { ingredients: product.ingredients, page: 'main' })}
                      style={styles.NameStyle}>
                      <Text style={styles.TitleText}>{product.name}</Text>
                    </TouchableOpacity>

                    <View style={styles.PriceStyle}>
                      <Text style={styles.TitleText}>{product.price}</Text>
                    </View>

                    <IconButton
                      icon={'delete'}
                      color={"red"}
                      size={20}
                      onPress={() => this.deleteProduct(product.id, 'N')}
                    />

                    <IconButton
                      icon={'pencil-outline'}
                      color={"black"}
                      size={20}
                      onPress={() => this.props.navigation.navigate('EditProductScreen', { product: product })}
                    />

                  </View>
                ))
              }
              <View style={{ marginBottom: 50 }}>
              </View>
              {/* <Caption style={{ alignSelf: 'center', marginBottom: 0 }}>Develop by : NSinova </Caption> */}
            </ScrollView>
          ) : null}
        </View>
      </View>
    );
  }
}


