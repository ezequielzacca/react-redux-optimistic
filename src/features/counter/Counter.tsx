import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementOptimistic, selectCount } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

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
