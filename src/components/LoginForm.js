import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Header, Spinner } from './common';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged,loginUser } from '../actions'
class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password } = this.props;
        
        this.props.loginUser({ email, password });
    }

    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    renderButton(){
        if(this.props.loading){
            return(
                <Spinner size="large" />
            );
        }else{
        return(
        <Button
            onPress={this.onButtonPress.bind(this)}>
            Login
         </Button>
        );
    }}
    render(){
        return(
            
                <Card>
                    <CardSection>
                        <Input
                        label="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        placeholder="u@yourEmailAdress.com"
                        value={this.props.email}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                        secureTextEntry
                        label="Password"
                        placeholder="your super safe password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                    </CardSection>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                    <CardSection>
                        
                    {this.renderButton()}
                    </CardSection>
                </Card>
        
        );
    }
}

const mapStateToProps =  ({ auth }) => {
    const { email, password, loading, error } = auth;

    return { email, password,  loading, error };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);