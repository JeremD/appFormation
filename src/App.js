
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { random, floor } from 'mathjs';

  const gladines = {
    photo: 'https://s3-media4.fl.yelpcdn.com/bphoto/9VE0WC8_dgoeUPQUY81rOg/348s.jpg',
    text: 'Gladines',
  };

  const cedric = {
    photo: 'https://lh5.googleusercontent.com/-kX5u7axPogM/AAAAAAAAAAI/AAAAAAAAAD4/xxM_P1IDVkI/photo.jpg',
    text: 'Non c\'est l\'heure de la formation de Cédric!!'
  };
  const jap = {
    photo: 'https://s3-media1.fl.yelpcdn.com/bphoto/F2rDw4XJwxrrAFo-ZCQG-g/348s.jpg',
    text: 'JAAAAAAP',
  };

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      choice: {
        photo: 'http://peakability.com/wp-content/uploads/2011/08/What-to-Eat.jpg',
        text: '???',
      },
    };
  }

  getChoiceInfo (number) {
    switch (number) {
      case 0:
        return gladines;
      case 1:
        return jap;
      case 2:
        return jap;
      case 3:
        return cedric;
      case 4:
        return gladines;
      case 5:
        return cedric;
    }
  }

  choose() {
    this.setState({
      ...this.state,
      choice: this.getChoiceInfo(floor(random(5))),
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Where do you want to eat??
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.choiceContainer}>
            <Image
              style={styles.image}
              source={{uri: this.state.choice.photo}}
            />
            <Text style={styles.title}>{this.state.choice.text}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={ () => this.choose() }
          >
            <Text style={{marginHorizontal: 5}}>Choisir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  choiceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 2,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200
  },
  button: {
    marginTop: 10,
    backgroundColor: '#6495ed',
    minHeight: 50,
    width: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
