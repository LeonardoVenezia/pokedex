import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import pokemon from './pokemon/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    pokemon: pokemon.reducer,
});

const store = configureStore({
    middleware: [thunk],
    reducer,
});

export default store;
