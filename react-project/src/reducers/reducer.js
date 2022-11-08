const reducer = (state, action) => {
  if (state === undefined) {
    state = {
      count: 11000,
    };
  }

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.count,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.count,
      };
    default:
      return state;
  }
};

export default reducer;
