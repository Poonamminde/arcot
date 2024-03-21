import { createStore } from "redux";

const reducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case "load":
      return { ...action.data };
    default:
      return { ...state };
  }
};

export const store = createStore(reducer);
