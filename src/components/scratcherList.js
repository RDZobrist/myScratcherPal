import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchScratchers } from '../actions';
import _ from 'lodash';
import ListItem from './scratcherListItem';
class ScratcherList extends Component {
    componentWillMount(){
        this.props.fetchScratchers();

        this.createDataSource(this.props)
       
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ scratchers }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(scratchers)
    }

    renderRow(scratcher){
        return <ListItem scratcher={scratcher} />
    }
    render(){
      
        return(
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />

        );
    }
}

const mapStateToProps = state => {
    const scratchers = _.map(state.scratchers, (val, uid) => {
        return { ...val, uid }
    });

    return { scratchers };
}


export default connect(mapStateToProps, { fetchScratchers })(ScratcherList);