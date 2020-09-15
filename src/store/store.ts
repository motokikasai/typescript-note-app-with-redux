import { createStore } from 'redux';
import { notesReducer } from './notesReducder';

export const store = createStore(notesReducer);
