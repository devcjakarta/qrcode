import React, { PureComponent } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Text,
  Button
} from 'native-base';

class Home extends PureComponent {
  beginScan = () => {
    this.props.navigation.navigate('BeginScan');
  }
  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>FB DevC Jakarta</Title>
          </Body>
        </Header>
        <Content padder>
          <Text>Welcome!!!</Text>
          <Button block onPress={this.beginScan}>
            <Text>Scan QR Code</Text>
          </Button>
        </Content>
      </Container>
    );
  }
};

export default Home;
