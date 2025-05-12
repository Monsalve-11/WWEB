// index.js — antes de cualquier import de Firebase o React
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';


import { registerRootComponent } from 'expo';
import App from './src/App';  

registerRootComponent(App);
