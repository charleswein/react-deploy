import React from "react";
import Row from "./Row";
const Board = ({field}) => {
  return (
    <div className="container">
      {field.map((item,rowIndex) => {
        return <Row item={item} row={rowIndex} key={rowIndex} />;
      })}
    </div>
  );
};
export default Board;
