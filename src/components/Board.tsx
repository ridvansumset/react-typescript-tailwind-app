import React from "react";
import Square from "./Square";

interface Props {
    squares: Array<string | null>,
    onClick: (a: number) => void,
    winner: string | null,
    xIsNext: boolean,
}

export default class Board extends React.Component<Props> {
  renderSquare(i: number) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const status = this.props.winner
      ? `Winner is ${this.props.winner}`
      : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;

    return (
      <div className="flex flex-col items-center">
        <h3 className="base-txt-h3 text-center mb-2">
          {status}
        </h3>

        <div className="grid grid-cols-3 gap-0">
          {[...Array(9).keys()].map((key) => this.renderSquare(key))}
        </div>
      </div>
    );
  }
}
