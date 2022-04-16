import {Text, View, StyleSheet} from 'react-native';
import { styles } from './style.js';

export default props => 
    <View style={styles.headerBox}>
        <Text style={styles.headerText}>{props.children}</Text>
    </View>