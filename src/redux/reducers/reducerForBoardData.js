import { EASY_BOARD, MIDDLE_BOARD, HARD_BOARD, LOAD_FROM_LOCAL, MATCHED, FLIP_FALSE,FLIP_TRUE, DISABLED_FALSE, DISABLED_TRUE} from "../types";

const initialState = {
  field: null,
  disabled: false
};

function reducerForBoardData(state = initialState, action) {
  switch (action.type) {
    case EASY_BOARD:
      return { ...state, field: action.payload };
    case MIDDLE_BOARD:
      return { ...state, field: action.payload };
    case LOAD_FROM_LOCAL:
      return { ...state, field: action.payload };
    case HARD_BOARD:
      return { ...state, field: action.payload };
    case FLIP_TRUE:
      return { ...state, field: action.payload };
    case FLIP_FALSE:
      return { ...state, field: action.payload };
    case DISABLED_TRUE:
      return { ...state, disabled: true };
    case DISABLED_FALSE:
      return { ...state, disabled: false };
    case MATCHED:
      return { ...state, field: action.payload };
    default:
      return state;
  }
}

export { reducerForBoardData };
