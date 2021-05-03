import * as React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { UsuarioService } from '../../services/Rest/UsuarioService';
import { Images } from '../../Themes';
import styles from './LoginPageStyles';
import { onSignIn } from '../Auth/Auth';

interface Props {
  navigation: any
}

export default class LoginPage extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  state = {
    showPassword: true,
    ShowHide: 'Show',
    token: null,

    usuario: {
      username: "",
      password: ""
    },
    username: '',
    password: ''
  }


  updateFormProjeto() {

    let usuario = this.state.usuario

    usuario.username = this.state.username
    usuario.password = this.state.password
    this.setState({ usuario: usuario });

    const usuarioService = new UsuarioService()

    usuarioService.fazerLogin(this.state.usuario).then(res => {

      this.redirect(res)
    }).catch(err => Alert.alert(err.toString()))
  }

  redirect(res) {

    if (res.status == 200) {
      Alert.alert('Logar com Sucesso')
      onSignIn(res.headers.map.authorization).then(() => this.props.navigation.navigate('MainScreen', { token: res.headers.map.authorization }));
    } else {
      Alert.alert("usuario ou senha incorreta", 'Erro')
    }
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });

    if (!this.state.showPassword)
      this.setState({ ShowHide: 'Show' })
    else
      this.setState({ ShowHide: 'Hide' })
  }

  render() {

    return (
      <View style={styles.body}>

        <View style={styles.sectionContainer}>

          <View style={styles.EmailView}>
            <TextInput
              style={{ width: 250 }}
              placeholder="Seu email@com"
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />

          </View>

          <View style={styles.PasswordView}>
            <TextInput
              style={{ width: 220 }}
              placeholderTextColor="gray"
              placeholder="Password"
              secureTextEntry={this.state.showPassword}
              onChangeText={(password) => this.setState({ password })}

            />


            {
              this.state.showPassword ? (
                <IconButton
                  icon={Images.show}
                  color={"grey"}
                  size={20}
                  onPress={() => this.toggleSwitch()}
                />
              ) : (
                  <IconButton
                    icon={Images.hide}
                    color={"grey"}
                    size={20}
                    onPress={() => this.toggleSwitch()}
                  />
                )
            }
          </View>


          <View style={styles.fixToText}>
            <Button
              title="Login"
              color="lightblue"

              onPress={() => this.updateFormProjeto()}
            />

          </View>


        </View>

        <View style={styles.circuloView}>
          <View style={styles.BoxView}>
            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 5 }}>
              <Text >Ainda não é usuasio ?</Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }

}

