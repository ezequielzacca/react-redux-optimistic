import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { increment, simulateCallServer } from '../features/counter/counterSlice';
import { undo } from './undo.reducer-enhancer';

const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const incrementOptimistic = () => ({
    type: INCREMENT_ASYNC
})


function* incrementCounterAsync() {
    const action = increment()
    try {
        yield put(action);
        yield simulateCallServer();
    } catch (e) {
        console.log("Error... undoing")
        yield put(undo(action));
    }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

export function* counterSaga() {
    yield takeEvery(INCREMENT_ASYNC, incrementCounterAsync);
}

