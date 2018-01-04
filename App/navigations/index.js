import { StackNavigator } from 'react-navigation';

import Home from '../screens/home';
import BeginScan from '../screens/begin-scan';
import ScanResult from '../screens/scan-result';

const routeConfigs = {
  Home: {
    screen: Home
  },
  BeginScan: {
    screen: BeginScan
  },
  ScanResult: {
    screen: ScanResult
  }
};

const stackNavigatorConfigs = {
  initialRouteName: 'Home',
  headerMode: 'none'
};

export default StackNavigator(routeConfigs, stackNavigatorConfigs);
