import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { INCREMENT } from '../store/index'
import { counterAction } from '../store/index'

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const increamentHandler = () => {
    dispatch(counterAction.increment())
  }
  const increaseHendler = () => {
    dispatch(counterAction.increase(10))
  }
  const decreamentHandler = () => {
    dispatch(counterAction.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={increaseHendler}>Increase by 10</button>
        <button onClick={decreamentHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
