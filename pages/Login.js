import React from 'react';
import { StyleSheet, Text, TextInput, Image,
          View, TouchableOpacity, ActivityIndicator,
        KeyboardAvoidingView, AlertIOS} from 'react-native';
import { FontAwesome, 
        EvilIcons, 
        Entypo } from '@expo/vector-icons';

import {fb} from '../utils/firebase';

export default class Login extends React.Component {
  static navigationOptions = {
      title: 'Đăng nhập',
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    }
    this.checkLogin = this.checkLogin.bind(this);
  }
  componentDidMount() {
    // var user = fb.auth().currentUser;
    // console.log(user);
    // if(user){
    //   this.props.navigation.navigate('ListPost');
    // }

    setTimeout(() => {
      this.setState({loading: false});
    }, 1000);  
  }

  checkLogin(){
    
    fb.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      AlertIOS.alert(
        'Đăng nhập thành công'
      );

      setTimeout(() => {
        this.props.navigation.navigate('ListPost');

      }, 1000)
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      AlertIOS.alert(
        errorMessage
      );
    });
    // this.props.navigation.navigate('ListPost');
  }

  render() {
      return (
        <KeyboardAvoidingView style={styles.container} enable>
          <Image source={require('../img/bg-login.jpg')} style={styles.bgImage} />
          <View style={[styles.txtIconSection, {marginTop: 350}]}>
              <EvilIcons style={{padding: 5}} name="user" size={35} color="black" />
              <TextInput
                  style={styles.input}
                  placeholder="Nhập email"
                  onChangeText={(email) => this.setState({email})}
                  underlineColorAndroid="transparent"
              />
          </View>
          <View style={[styles.txtIconSection, {marginTop: 10}]}>
              <FontAwesome style={{padding: 10}} name="lock" size={20} color="black" />
              <TextInput
                  style={styles.input}
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                  underlineColorAndroid="transparent"
              />
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity 
              style={styles.loginBtn} 
              onPress={this.checkLogin}
            >
              <Text style={{color: '#ffffff'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  container: {
    flex: 1,
  },
  bgImage: {
    backgroundColor: '#fff',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  txtIconSection: {
      height: 40,
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 25,
      marginLeft: 20,
      marginRight: 20,
  },
  txtIcon: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 8
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 3,
      color: '#424242',
  },
  loginBtn: {
    backgroundColor: '#2895B6', 
    marginTop: 30, 
    width: 100, 
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
  
});
