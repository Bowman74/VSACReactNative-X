import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';
import App from './App';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

AppRegistry.registerComponent('VSACReactNative', () => codePush(codePushOptions)(App));
