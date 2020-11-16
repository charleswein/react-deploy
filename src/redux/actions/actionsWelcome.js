import {DATA_WELCOME,EASY_BOARD,MIDDLE_BOARD,HARD_BOARD} from '../types'
import {createBoardWithRow} from '../../data/dataBoard'
const getDataFromWelcome = (data) => ({
 type: DATA_WELCOME,
 payload: data
})

const createBoardEasy = () => ({
 type: EASY_BOARD,
 payload: createBoardWithRow(0,4)
});
const createBoardMiddle = () => ({
 type: MIDDLE_BOARD,
 payload: createBoardWithRow(1,6)
});
const createBoardHard = () => ({
 type: HARD_BOARD,
 payload: createBoardWithRow(2,5)
});

const getBoardData = (text) => {
 return (dispatch) => {
  if(text === 'Easy'){
   dispatch(createBoardEasy());
  }
  if(text === 'Middle'){
   dispatch(createBoardMiddle());
  }
  if(text === 'Hard'){
   dispatch(createBoardHard());
  }
 };
};

export {getDataFromWelcome, createBoardEasy, createBoardMiddle, createBoardHard,getBoardData}
