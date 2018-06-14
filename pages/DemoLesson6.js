import React from 'react';
import { StyleSheet, 
          Text, 
          Picker,
          Switch,
          View} from 'react-native';

export default class DemoLesson6 extends React.Component {
  static navigationOptions = {
      title: 'Demo lesson 6',
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      lang: 'jsc',
      switchVal: false
    }
  }

  
  render() {
      return (
        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <Switch 
            value={this.state.switchVal}
            onValueChange={(val) => this.setState({switchVal: val})}
          />
          
          <Picker
            selectedValue={this.state.lang}
            onValueChange={(itemValue, index) => this.setState({lang: itemValue})}
          >
            <Picker.Item label="Java" value="jav" />
            <Picker.Item label="JavaScript" value="jsc" />
            <Picker.Item label="Toán" value="mat" />
            <Picker.Item label="Android" value="and" />
          </Picker>
          <Text>{this.state.lang}</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({

  
});
