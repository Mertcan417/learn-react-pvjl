export default function TicTacToe() {
  return (
    <>
      <Board></Board>
    </>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
      </div>
      <div className="board-row">
      </div>
      <div className="board-row">
      </div>
    </>
  );

  function Square() {
    return <button className="square">1</button>;
  }

}
