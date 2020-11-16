import React, { useState, useEffect} from "react";
import { connect, useDispatch } from "react-redux";
import BoardContext from "./context/BoardContext";

import Board from "./components/Board";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";
import './game.scss'

import {
  loadFromLocal,
  changeFlipProperty,
  closeAllCards,
  changeMatchedProperty
} from "../../redux/actions/actionsGame";


import {
  LocalField,
  LocalWelcome,
  LocalCount,
} from "../../localStorage/Local";

const Game = ({ field, dataWelcome }) => {
  const [count, setCount] = useState(LocalCount.Data || 0);
  const [disabled, setDisabled] = useState(false);
  const { firstN, backSideCard } = dataWelcome;

  const dispatch = useDispatch();
  useEffect(() => {
    LocalCount.Data = count;
    if (field !== null) {
      LocalField.Data = field;
    }
    if(dataWelcome !== null){
      LocalWelcome.Data = dataWelcome;
    }
  }, [dataWelcome, field, count]);

  useEffect(() => {
    dispatch(loadFromLocal(field));
  }, [dispatch, field]);

  const handlerCard = (row, card, type, id) => {
    setCount((prev) => prev + 1);
    dispatch(changeFlipProperty(row, card));
    dispatch(closeAllCards())
    dispatch(changeMatchedProperty(type))
  };

  return (
    <BoardContext.Provider
      value={{
        backSideCard: backSideCard,
        counter: handlerCard,
        field: field,
        disabled: disabled,
      }}
    >
      <div>
        <h1 className="text-center">Welcome to {firstN} MMG!!!</h1>
        <div className="container d-flex mb-4">
          <Timer />
          <Counter count={count} />
        </div>
        <Board field={field} />
      </div>
    </BoardContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  field: state.app.field || LocalField.Data,
  dataWelcome: state.welcome.dataWelcome || LocalWelcome.Data,
});

export default connect(mapStateToProps, null)(Game);
