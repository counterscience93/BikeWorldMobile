import React ,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export  default class Splash extends Component{
    render() {
        return (
          <View style={styles.wrapper}>
              <View style={styles.titleWrapper}>
                  <Text style={styles.title}>
                      Bike World!
                  </Text>
              </View>
              <View>
                  <Text style={styles.subtitle}>
                      Power by React Native!
                  </Text>
              </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#27ae60',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'white',
        fontWeight: '300',
        paddingBottom: 20,
    },
    titleWrapper:{
        //backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
    }
});