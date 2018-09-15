import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

    onRowPress() {
        Actions.recordOutcome({scratcher: this.props.scratcher});
    }
    render() {
        const { name } = this.props.scratcher;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>
            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
};

const styles = {
    titleStyle: {
        paddingTop: 5,
        fontSize:22,
        paddingLeft: 15,
        color: 'green'
    }
}

export default ListItem;