const initialState = {
  beer: [],
};
export default function favouriteReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "SET_BEER": {
      return { ...state, beer: payload };
    }
    default:
      return state;
  }
}
