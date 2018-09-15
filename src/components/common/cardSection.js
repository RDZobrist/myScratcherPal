import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return(
        <View style={[styles.containerStyle, props.style]}>{props.children}</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#f4f5f7',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#bfc0c1',
        position: 'relative'
    }
};

export { CardSection };