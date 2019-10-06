import React from 'react';
import { StyleSheet, View, Button } from 'react-native';



export default class VideoScreen extends React.Component {
    static navigationOptions = {
      title: 'Videos',
    };
    render() {
      //const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>
             <Button
             title="Go to Home screen"
             onPress={() => {
                this.props.navigation.navigate("Home");
             }}
             />

          </View>

          
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });