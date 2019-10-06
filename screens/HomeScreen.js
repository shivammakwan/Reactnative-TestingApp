import React from 'react';
import { StyleSheet, ScrollView, Image  } from 'react-native';
import { Container, Content, Footer, FooterTab,  Icon, Text, Button, Card, CardItem, Thumbnail, Left, Body } from 'native-base';


export default class HomeScreen extends React.Component {

    
    static navigationOptions = {
      title: 'Home',
    };
    
    render() {
      
      return (
      
        
        <Container>

        <ScrollView style= {styles.container}>
        <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://source.unsplash.com/1024x768/?nature'}} />
            <Body>
              <Text>Pratik Sukhe</Text>
              <Text note>October, 6, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'https://source.unsplash.com/1024x768/?tree'}} style={{height: 160, width: 380, flex: 1}}/>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen
               book. It has survived not only five centuries,
             but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="logo-github" />
              <Text>1,926 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>

        </ScrollView>

        

            <Content />
            <Footer>
              <FooterTab>

                <Button vertical active>
                  <Icon name="home" />
                  <Text>Home</Text>
                </Button>

                <Button vertical
                onPress= { () => {this.props.navigation.navigate("Game")}}
                >
                  <Icon name="camera" />
                  <Text>Game</Text>
                </Button>

                <Button vertical 
                onPress= { () => {this.props.navigation.navigate("Video")}}
                >
                  <Icon active name="navigate" />
                  <Text>Videos</Text>
                </Button>

                <Button vertical
                onPress= { () => {this.props.navigation.navigate("Contact")}}
                >
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
        </Container>
        
        
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      //margin: 10
    }
    
    
  });
  