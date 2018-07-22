import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';

const ADD_ENTRY = 'ADD_ENTRY';
const FETCH_ALL_ENTRIES = 'FETCH_ALL_ENTRIES';

const initialState = {
  currentJournal: {},
  currentEntry: {},
  allJournals: [],
  allEntries: [],
  currentJournalEntries: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {...state, allEntries: [...state.allEntries, action.entry]};
    case FETCH_ALL_ENTRIES:
      return {...state, allEntries: action.entries};
    default:
      return state;
  }
}


const addEntry = (entry) => ({
  type: ADD_ENTRY,
  entry
});

const fetchAllEntries = (entries) => ({
  type: FETCH_ALL_ENTRIES,
  entries
});


export const submitEntry = (entry) => async dispatch => {
  const response = await axios.post('/api/entries', entry);
  dispatch(addEntry(response.data));
};

export const fetchEntries = () => async dispatch => {
  const response = await axios.get('/api/entries');
  dispatch(fetchAllEntries(response.data));
}

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;