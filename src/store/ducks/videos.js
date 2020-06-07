export const Types = {
  FOUND: 'videos/FOUND',
  FAILED: 'videos/FAILED',
  LOADING: 'videos/LOADING',
};

const INITIAL_STATE = {
  status: 'idle',
  items: [],
  common_words: {},
  days_to_watch_all: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  let newState = { ...state };
  if (action.type === Types.FOUND) {
    newState = { ...newState, ...action.payload.data, status: 'idle' };
  } else if (action.type === Types.LOADING) {
    console.log(newState);
    newState = { ...newState, status: 'loading' };
    console.log(newState);
  }
  return newState;
};
export default reducer;
