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

class ScanResultScreen extends PureComponent {
  constructor (props) {
    super(props);
    this.code = this.props.navigation.state.params.code;
  }
  goBack = () => {
    this.props.navigation.goBack();
  }
  render () {
    console.log(this.code);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Scan Result</Title>
          </Body>
        </Header>
        <Content padder>
          <Text>{this.code}</Text>
          <Button block onPress={this.goBack}>
            <Text>Scan QR Code Again</Text>
          </Button>
        </Content>
      </Container>
    );
  }
};

export default ScanResultScreen;
