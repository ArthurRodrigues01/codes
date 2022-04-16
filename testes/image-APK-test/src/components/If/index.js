import {View} from 'react-native';

export default props => {
    if(props.condition){
        return (
            <View>{props.children}</View>
        )
    }
    return null
}