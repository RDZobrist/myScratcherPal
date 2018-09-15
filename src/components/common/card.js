import React from 'react';
import { View } from 'react-native';

const Card = (props)=>{
    return (
        <View style={styles.cardStyle}>{props.children}</View>
    );
};

const styles = {
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#efefef',
        shadowOffset: { width: 0, height:2 },
        shadowOpacity: 0.175,
        shadowRadius: 1.75,
        elevation: 1,
        marginLeft: 7,
        marginRight: 7,
        marginTop: 7

        }
}


export { Card };