import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const { labelStyle, inputStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput 
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
const styles = {
    inputStyle: {
        height: 30,
        width: 100,
        color: '#000',
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1

    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row', 
        alignContent: 'center'
    }
}
export { Input };