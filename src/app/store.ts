import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { undoable } from './undo.reducer-enhancer';
import createSagaMiddleware from "redux-saga";
import { counterSaga } from "./sagas"

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


export const store = configureStore({
  reducer: {
    counter: undoable(counterReducer),
  },
  middleware
});

sagaMiddleware.run(counterSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
