import * as ActionTypes from "./ActionTypes";

export const Partners = (state = { errMess: null, partners: [] }, action) => {
  switch (action.type) {
    case ActionTypes.PARTNERS_LOADING:
      // console.log("PARTNERSLOADING================================");
      return { ...state, isLoading: true, errMess: null, partners: [] };

    case ActionTypes.PARTNERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.ADD_PARTNERS:
      // console.log("hit================================")
      return { ...state, isLoading: false, errMess: null, partners: action.payload };
    default:
      return state;
  }
};
