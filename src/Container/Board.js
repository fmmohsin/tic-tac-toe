import React, { Component } from 'react'
import './Board.css'
import Square from '../component/Square'
class Board extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            squares: Array(9).fill(null),
            isNextX:props.isNextX
        };
    }

    onClickHandler = (id) => {
        if(this.state.squares[id]===null){
            let localSquares=this.state.squares.concat();
            if(this.state.isNextX)
                localSquares[id]='x'
            else
                localSquares[id]='o'
            this.setState((state)=>({squares:localSquares,isNextX:!state.isNextX}),()=>{
                const squares = this.state.squares.slice();
                const winner=this.calculateWinner(squares);
                if ( winner) {
                    this.props.updateScore(winner);
                    this.setState((state,props)=>({
                        squares: Array(9).fill(null),
                        isNextX:props.isNextX
                    }));
        
                }
            });
        }

    }
    calculateWinner=(squares)=>{
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    render() {
        // const squares = this.state.squares.slice();
        // const winner=this.calculateWinner(squares);
        // if(winner){
        //     this.props.updateScore(winner);
        //     this.setState((state,props)=>({
        //         squares: Array(9).fill(null),
        //         isNextX:props.isNextX
        //     }));
        // }
        // else{

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
        // }
    }
}
export default Board;