import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Board from './Board'
import './Gameboard.css'
import PreferenceIcon from '../component/PreferenceIcon'
class Gameboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            score: [0, 0],
            players: ['Player1'],
            players_avatar: null
        }
    }


    static getDerivedStateFromProps(props, state) {
        if (!props.gameState.playmode)
            props.history.push('/Playmode')
        let players_avatar = state.players_avatar;
        if (props.gameState.pickedSide !== state.players_avatar) {
            if (props.gameState.pickedSide === 'cross')
                players_avatar = 'x'
            else
                players_avatar = 'o'
        }
        let players = state.players.concat();
        if (props.gameState.playmode === 'ai') {
            players.push('AI');
            return {
                ...state,
                players_avatar: players_avatar,
                players: players

            }
        }
        else {
            players.push('Player2');
            return {
                ...state,
                players_avatar: players_avatar,
                players: players
            }
        }
    }

    onClickHandler = () => {
        this.setState((state, props) => ({
            score: [state.score[0] + 1, state.score[1]]
        }));
    }
    updateScore = (winner) => {
        if (this.state.players_avatar === winner) {
            this.setState((state) => ({
                ...state,
                score: [state.score[0] + 1, state.score[1]]
            }))
        }
        else {
            this.setState((state) => ({
                ...state,
                score: [state.score[0], state.score[1] + 1]
            }))
        }

    }
    render() {

        return (
            <div className="container">
                <section className="row-gameboard">
                    <div className="player-name"><h3>{this.state.players[0]}</h3></div>
                    <div className="score-board"><h2>{this.state.score[0]}{' '}-{' '}{this.state.score[1]}</h2></div>
                    <div className="player-name"><h3>{this.state.players[1]}</h3></div>
                </section>
                <section>
                    <Board updateScore={this.updateScore} withAI={this.state.players[1] === 'AI' ? true : false} firstPlayer={this.state.players_avatar} />
                </section>
                <PreferenceIcon />
            </div>
        )
    }
}
export default withRouter(Gameboard);