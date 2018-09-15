import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { scratcherUpdate, addScratcherToList, nameChanged, amountChanged } from '../actions';
import { Card, Input, CardSection, Button } from './common';

class ScratcherCreate extends Component {

    onAmountChange(text){
        
        this.props.amountChanged(text);
    };

    onNameChange(text){
        this.props.nameChanged(text);
    };
    
    onButtonPress(){
        
        const {name, amount } = this.props;
                            console.log(name, amount);

        if (name.length && amount.length){

        this.props.addScratcherToList({
            name,
            amount
        });

        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Name"
                    placeholder="Miss Pacman"
                    value={this.props.name}
                    onChangeText={this.onNameChange.bind(this)}
                    />
                </CardSection>
              
                <CardSection style={{ 
                    flexDirection:'column', 
                    paddingBottom:5
                    }}
                >
                    <Text style={styles.pickerTextStyle}>Amount</Text>
                    <Picker
                    selectedValue={this.props.amount}
                    onValueChange={this.onAmountChange.bind(this)}
                    >
                    <Picker.Item label= "$1" value= "1" />
                    <Picker.Item label= "$2" value= "2" />
                    <Picker.Item label = "$3" value = "3" />
                    <Picker.Item label = "$5" value = "5" />
                    <Picker.Item label = "$10" value = "10" />
                    <Picker.Item label = "$20" value = "20" />
                    <Picker.Item label = "$30" value = "30" />
                </Picker>
         

                </CardSection>
                
                <CardSection >
                    <Button onPress={this.onButtonPress()} >
                        Add Scratcher
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
        marginBottom:10,
        paddingTop: -10
        
    }
}
const mapStateToProps = (state) => {
    const { name, amount, buttonPressed } = state.scratcherForm;

    return { name, amount, buttonPressed }
}

export default connect(mapStateToProps,{
    scratcherUpdate, addScratcherToList, nameChanged, amountChanged
 })(ScratcherCreate);