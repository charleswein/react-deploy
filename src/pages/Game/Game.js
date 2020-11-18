import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import BoardContext from "./context/BoardContext";
import Loader from "../Loader";

import Board from "./components/Board";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";
import calculateTimer from '../../data/calculateTimer'
import "./game.scss";

import {
  loadFromLocal,
  changeFlipProperty,
  closeAllCards,
  changeMatchedProperty
} from "../../redux/actions/actionsGame";

import { LocalField, LocalWelcome, LocalCount, LocalDisabled} from "../../localStorage/Local";

const Game = ({ field, dataWelcome, disabled }) => {
  const [timeInSeconds, setTimeInSeconds] = useState(0); 
  const [timerArray, setTimerArray] = useState([]);

  const [count, setCount] = useState(LocalCount.Data || 0);
  const { firstN, backSideCard } = dataWelcome;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    LocalCount.Data = count;
    if (field !== null) {
      LocalField.Data = field;
    }
    if (dataWelcome !== null) {
      LocalWelcome.Data = dataWelcome;
    }
    LocalDisabled.Data = disabled;
  }, [dataWelcome, field, count, disabled]);
  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[loading])

 
  useEffect(() => {
   let timerArray = calculateTimer(timeInSeconds);
   setTimerArray(timerArray)
  },[timeInSeconds])

  useEffect(() => {
    dispatch(loadFromLocal(field));
  }, [dispatch, field]);

  const handlerCard = (row, card, type, id) => {
    setCount((prev) => prev + 1);
    dispatch(changeFlipProperty(row, card));
    dispatch(closeAllCards());
    dispatch(changeMatchedProperty(type));
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
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-center">Welcome to {firstN} MMG!!!</h1>
          <div className="container d-flex mb-4">
            <Timer timerArray={timerArray} setTimeInSeconds={setTimeInSeconds}/>
            <Counter count={count} />
          </div>
          <Board field={field} />
        </div>
      )}
    </BoardContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  field: state.app.field || LocalField.Data,
  dataWelcome: state.welcome.dataWelcome || LocalWelcome.Data,
  disabled: state.app.disabled && (LocalDisabled.Data = state.app.disabled)
});

export default connect(mapStateToProps, null)(Game);
