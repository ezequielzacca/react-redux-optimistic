import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from './counterSlice';
import styles from './Counter.module.css';
import { incrementOptimistic } from '../../app/sagas';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementOptimistic())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
            </div>
        </div>
    );
}
