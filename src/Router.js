import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ScratcherList from './components/scratcherList';
import ScratcherCreate from './components/scratcherCreate';
import recordOutcome from './components/recordOutcome';
const RouterComponent = () => {
    return (
       
            <Router >
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene 
                        key="scratcherList"
                        component={ScratcherList}
                        title="Scratchers"
                        rightTitle="Add Scratcher"
                        onRight={() => Actions.scratcherCreate()} 
                        initial
                    />
                    <Scene key="scratcherCreate" component={ScratcherCreate} title="Add Scratcher" />
                    <Scene key="recordOutcome" component={recordOutcome} title="Record Winnings" />

                </Scene>
            </Scene>
            </Router>
    
    );
};

export default RouterComponent;