import React, { Component } from 'react'
import Playmode from './Playmode'
import Sidepicker from './Sidepicker'
import Gameboard from './Gameboard'
import './Home.css'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            pickedSide:'cross'
        };
    }
    onplayModeHandler = (id) => {
        setTimeout(()=>{this.setState({playmode:id})
        this.props.history.push('/Sidepicker');
    },100)
    }

    onSidepickHandler = (event) => {
        const pickedSide=event.currentTarget.id==='cross'?'cross':'circle'
        this.setState({pickedSide:pickedSide})
       
    }
onContinueHandler=()=>{
    setTimeout(()=>{
    this.props.history.push('/Gameboard');
},100)
    

}

    render() {
        return (
            <div className='Home'>
                <Switch>
                    <Route path="/Playmode" component={() => <Playmode onplayModeHandler={this.onplayModeHandler} gameState={this.state}/>} />
                    <Route path="/Sidepicker" component={() => <Sidepicker onContinue={this.onContinueHandler} onClick={this.onSidepickHandler} gameState={this.state}/>} />
                    <Route path="/Gameboard" component={() => <Gameboard gameState={this.state}/>} />
                    <Redirect to="/Playmode" />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Home);