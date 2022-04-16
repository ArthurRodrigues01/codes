import {View, Text} from 'react-native';
import { styles } from './style.js'

export default props => 
    <View style={styles.footerBox}>
        <Text style={styles.footerText}>{props.children}</Text>
    </View>