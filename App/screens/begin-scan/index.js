import React, { Component } from 'react';
import { compose } from 'redux';
import {
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { withNavigationFocus } from '@patwoz/react-navigation-is-focused-hoc';

class BeginScanScreen extends Component {
  constructor (props) {
    super(props);
    this.scanner = null;
  }

  initialState = {
    code: '',
    error: false
  }

  state = {
    ...this.initialState
  }

  shouldComponentUpdate (nextProps) {
    return !this.props.isFocused && nextProps.isFocused;
  }

  onSuccess = ({data}) => {
    try {
      this.props.navigation.navigate('ScanResult', { code: data });
      // this.setState({ ...this.initialState });
      this.forceUpdate();
    } catch (error) {
      this.setState({ error });
    }
  }

  renderTopContent = () => {
    let {error} = this.state;
    let displayText = error
      ? `An error has occurred ${JSON.stringify(error)}`
      : 'Scan the QR code.';
    return (
      <Text style={styles.centerText}>
        {displayText}
      </Text>
    );
  }

  renderBottomContent = () => {
    let {error} = this.state;
    let refresh = () => {
      this.setState({
        ...this.initialState
      })
    }
    return (
      <TouchableOpacity style={styles.buttonTouchable} onPress={refresh}>
        <Text style={styles.buttonText}>{error ? `Please try again.` : `Refresh`}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    let getRef = node => { this.scanner = node; };
    return (
      <QRCodeScanner
        ref={getRef}
        onRead={this.onSuccess}
        topContent={this.renderTopContent()}
        // bottomContent={this.renderBottomContent()}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});

export default compose(
  withNavigationFocus
)(BeginScanScreen)
