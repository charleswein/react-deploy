import { FLIP_FALSE, FLIP_TRUE, LOAD_FROM_LOCAL, MATCHED, DISABLED_TRUE, DISABLED_FALSE } from "../types";
import {
  getQualFlippedCard,
  getArrayFlippedCard,
} from "../../data/dataMacthed";

const flippedChangeTrue = (data) => ({
  type: FLIP_TRUE,
  payload: data,
});
const flippedChangeFalse = (data) => ({
  type: FLIP_FALSE,
  payload: data,
});


const matchedChange = (data) => ({
  type: MATCHED,
  payload: data,
});

const changeFlipProperty = (row, col) => {
  return (dispatch, getState) => {
    let store = getState();
    let field = store.app.field;
    let flippedCard = getQualFlippedCard(field);
    if (field[row][col].flipped === false) {
      field[row][col].flipped = true;
      dispatch(flippedChangeTrue(field));
    }
    console.log(flippedCard);
    if(flippedCard % 2 !== 0){
      dispatch({type: DISABLED_TRUE})
    }
  };
};

const closeAllCards = () => {
  return (dispatch, getState) => {
    let store = getState();
    let field = store.app.field;
    let flippedCard = getQualFlippedCard(field);
    console.log(flippedCard);
    if (flippedCard % 2 === 0) {
      setTimeout(() => {
        let newField = field.map((elem) => {
          return elem.map((card) => {
            if(card.matched !== true){
              card.flipped = false;
            }
            return card;
          });
        });
        dispatch(flippedChangeFalse(newField));
        dispatch({type: DISABLED_FALSE})
      }, 2000);
    }
  };
};

const changeMatchedProperty = (type) => {
  return (dispatch, getState) => {
    let store = getState();
    let field = store.app.field;
    const flippedCard = getQualFlippedCard(field);
    console.log(flippedCard);
    if (flippedCard > 1) {
      let arrayFlippedCard = getArrayFlippedCard(field);
      let qualEdentType = arrayFlippedCard.reduce((acum, elem) => {
        if (elem.type === type) {
          acum = acum + 1;
        }
        return acum;
      }, 0);
      if (qualEdentType === 2) {
        field.map((elem) => {
          return elem.map((card) => {
            if (card.type === type && card.flipped === true){
              card.matched = true
              console.log(card.matched);
            }
            return card;
          });
        });
        dispatch(matchedChange(field));
      }
    }
  };
};
const loadFromLocal = (data) => ({
  type: LOAD_FROM_LOCAL,
  payload: data,
});

export {
  loadFromLocal,
  changeFlipProperty,
  closeAllCards,
  changeMatchedProperty,
};
