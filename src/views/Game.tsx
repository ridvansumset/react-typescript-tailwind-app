import React from "react";
import { Board } from '../components';

interface State {
  history: Array<HistoryObj>,
  step: number,
  xIsNext: boolean,
  winner: string | null,
}

interface HistoryObj {
  squares: Array<string | null>,
  point: { row: number, col: number }
}

export default class Game extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          point: { row: 0, col: 0 },
        }
      ],
      step: 0,
      xIsNext: true,
      winner: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.goToMove = this.goToMove.bind(this);
  }

  handleClick(i: number) {
    if (this.state.winner) return;

    const history = this.state.history.slice(0, this.state.step + 1);
    const currentHistory = history[history.length - 1];
    const squares = currentHistory.squares.slice();
    const square = squares[i];

    if (square) return;

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    const row = Math.floor(i / 3);
    const col = i % 3;

    history.push({ squares, point: { row, col } });

    const step = this.state.step + 1;

    this.setState({
      history,
      xIsNext: !this.state.xIsNext,
      step,
      winner: calculateWinner(squares),
    });
  }

  goToMove(step: number) {
    this.setState({
      step: step,
      xIsNext: step % 2 === 0,
      winner: null,
    });
  }

  render() {
    const currentHistory = this.state.history[this.state.step];

    const movesList = this.state.history.map((h, index) => (
      <li
        key={index}
        className="border-b border-gray-400 dark:border-b-blue-200 text-lg text-slate-900 dark:text-slate-300 p-2 cursor-pointer"
        onClick={() => this.goToMove(index)}
      >
        {
          `Go to ${index > 0 ? `move ${index}` : 'start'}`
        }
        {
          index > 0
            ? <span className="text-xs">
                {' '}{`(${index % 2 === 0 ? 'O' : 'X'} was put on row: ${h.point.row + 1} col: ${h.point.col + 1})`}
              </span>
            : ''
        }
      </li>
    ));

    return (
      <>
        <div className="mb-8">
          <Board
            squares={currentHistory.squares}
            winner={this.state.winner}
            xIsNext={this.state.xIsNext}
            onClick={this.handleClick}
          />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="base-txt-h3 text-center mb-2">
            Moves
          </h3>

          <ul>
            {movesList}
          </ul>
        </div>
      </>
    );
  }
}

function calculateWinner(squares: Array<string | null>) {
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
