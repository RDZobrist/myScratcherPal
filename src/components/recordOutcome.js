import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { scratcherUpdate, recordOutcome } from '../actions';
import { Card, Input, CardSection, Button } from './common';

class RecordOutcome extends Component {
    componentWillMount(){
       console.log(this.props.scratcher);

    }
    // onButtonPress() {

    //     this.props.recordOutcome({  amount, uid, runningTotal });
    // }
    render() {
        return (
            <Card>
                  <CardSection >
                    <Button>
                        I won
                    </Button>
                </CardSection>
                <CardSection >
                    <Button>
                        I lost
                    </Button>
                </CardSection>
            </Card>
        )
    }
};
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        marginBottom: 10,
        paddingTop: -10

    }
}



export default connect(null, { scratcherUpdate, recordOutcome })(RecordOutcome);