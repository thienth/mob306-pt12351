import React from 'react';
import { StyleSheet, Text, Image, Modal,
          TouchableHighlight, Platform,
          View, TouchableOpacity, ScrollView} from 'react-native';

import {fb} from '../utils/firebase';
export default class ListPost extends React.Component {
  static navigationOptions = {
      title: 'Danh sách bài viết'
  };

  constructor(props) {
    super(props);
    
    this.state = {
      userEmail: null,
      posts: [],
      modalVisible: false
    }
    this.detailPost = this.detailPost.bind(this);    
    this.openModal = this.openModal.bind(this);    
  }

  componentDidMount() {
    var user = fb.auth().currentUser;
    this.setState({userEmail: user.email});

    let postRef = fb.database().ref('posts');

    postRef.on('value', (snapshot) => {

      let posts = [];
      snapshot.forEach((child) => {
        let item = child.val();
        item.key = child.key;
        posts.push(item)
      });
      console.log(posts);
      this.setState({posts});
    });

  }

  detailPost(){
    this.props.navigation.navigate('DetailPost');
  }

  openModal(){
    this.setState({modalVisible: true});
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
      return (

        <ScrollView style={styles.container}>
          <Text>{this.state.userEmail}</Text>
          <TouchableOpacity 
            style={styles.btnAdd}
            onPress={this.openModal}>
            <Text style={{color: '#fff', fontSize: 20}}>Thêm bài viết</Text>
          </TouchableOpacity>

          {this.state.posts.map(
            (p) => <View key={p.key} style={styles.postUnit}>
                      <TouchableOpacity onPress={this.detailPost}>
                        <Image source={{uri: p.image}} style={{width: '100%', height: 200}}/>
                      </TouchableOpacity>
                      <Text style={styles.title}>{p.title}</Text>
                      <Text>{p.short_desc}</Text>
                  </View>

          )}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={styles.modalContent}>
              <Text>Hello World!</Text>

              <TouchableHighlight
                style={{
                  width: '100%', 
                  height: 50, 
                  backgroundColor: '#FF9800', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: 0,
                  borderRadius: 30
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 8,
    paddingRight: 8,
  },
  postUnit: {
    marginTop: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5
  },
  btnAdd: {
    marginTop: 10,
    marginBottom: 7,
    backgroundColor: '#2895B6',
    width: '100%',
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },
  
});
