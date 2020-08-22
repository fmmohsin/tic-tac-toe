import React, { Component } from 'react'
import './Board.css'
import Square from '../component/Square'
import * as ai from '../logic'
class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(''),
            isNextX: props.firstPlayer === 'x' ? true : false,
            isAIturn: false
        };
        this.moves = 0;
        this.opponent = props.firstPlayer === 'x' ? 'o' : 'x';
    }
    onClickHandler = (id) => {
        if(this.moves%2===0||!this.props.withAI)
        this.updateSquare(id)
    }

    updateSquare = (id) => {
        this.moves++;
        if (this.state.squares[id] === '') {
            let localSquares = this.state.squares.concat();
            if (this.state.isNextX)
                localSquares[id] = 'x'
            else
                localSquares[id] = 'o'
            let isAI = false;
            if (this.props.withAI && !this.state.isAIturn)
                isAI = true;
            this.setState((state) => ({ squares: localSquares, isNextX: !state.isNextX, isAIturn: isAI }), () => {
            });
        }
    }
    componentDidUpdate = () => {
        const squares = this.state.squares.slice();
        const winner = ai.calculateWinner(squares);
        if (winner) {
            this.moves = 0;
            alert('The winner is ' + (this.props.firstPlayer === winner ? 'Player 1' : 'Player 2'))
            this.props.updateScore(winner);
            this.setState((state, props) => ({
                squares: Array(9).fill(''),
                isNextX: props.firstPlayer === 'x' ? true : false,
                isAIturn: false
            }));
        } else if (this.moves === 9) {
            alert("draw");
            this.moves = 0;
            this.setState((state, props) => ({
                squares: Array(9).fill(''),
                isNextX: props.firstPlayer === 'x' ? true : false,
                isAIturn: false
            }));
        }   

        if(this.props.withAI&&this.state.isAIturn&&this.moves!==0&&this.moves!==9){
            const possiblePosition=ai.getPossiblePosition(this.props.firstPlayer,this.opponent,this.state.squares)
            if(possiblePosition)
                this.updateSquare(possiblePosition)
            else
            {
                this.moves = 0;
                this.setState((state, props) => ({
                    squares: Array(9).fill(''),
                    isNextX: props.firstPlayer === 'x' ? true : false,
                    isAIturn: false
                }));
            }
        }

    }

    render() {
        const row1 = [];
        const row2 = [];
        const row3 = [];

        for (var i = 0; i < 3; i++)
            row1.push(<td key={i}><Square onClick={this.onClickHandler.bind(this, i)} value={this.state.squares[i]} /></td>)

        for (; i < 6; i++)
            row2.push(<td key={i}><Square onClick={this.onClickHandler.bind(this, i)} value={this.state.squares[i]} /></td>)

        for (; i < 9; i++)
            row3.push(<td key={i}><Square onClick={this.onClickHandler.bind(this, i)} value={this.state.squares[i]} /></td>)

        return (
            <div className="board">
                <table>
                    <tbody>
                        <tr>
                            {row1}
                        </tr>
                        <tr>
                            {row2}
                        </tr>
                        <tr>
                            {row3}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Board;