import { createStore } from "redux";

const reducer = (state = {
  distination: "",
  Voyageurs: 0
}, action) => {
  switch (action.type) {
      case "filter":
          var copy_state = {
              ...state
          };
          copy_state.distination = action.paylod.distination;
          copy_state.Voyageurs = action.paylod.Voyageurs;
          copy_state.dateStart = action.paylod.dateStart;
          copy_state.dateEnd = action.paylod.dateEnd;
          return copy_state
      default:
          return state;
  }
};

const store = createStore(reducer)

export default store