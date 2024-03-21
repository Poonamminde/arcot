import { createStore } from "redux";

const reducer = (state: any = {}, action: any) => {
  console.log(state);
  switch (action.type) {
    case "load":
      return { ...action.data };
    default:
      return { ...state };
  }
  console.log(state);
};

export const store = createStore(reducer);
