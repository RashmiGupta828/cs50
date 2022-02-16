import React from "react";
import Board from "./board";

export class Game extends React.Component {
constructor(props){
    super(props);
    this.state ={
        history:[{
            squares:Array(9).fill(null),
        }],
        xIsNext :true,
    }
}

    render() {
        const history = this.state.history;
        const current = history[history.length -1];
        const winner =calculateWinner(current.squares);
        let status;
        if(winner){
            status = 'winner :'+winner;
        }else{
            status ='Next player:' + (this.state.xIsNext? 'X':'O');
        }
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board 
                        squares={current.squares}
                        onclick={(i) => this.handleclick(i)}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <ol>{/*TODo*/}</ol>
                </div>
            </div>
        )
    }
}

export default Game;