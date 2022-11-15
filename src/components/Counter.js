import React,{useState} from 'react';

const Counter = () => {

  const [count,setCount] = useState(0);

  const reboot = () => {
    setCount(0);
  }

  const add = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={add} disabled={count==5 ? true : false}>+</button>
          <button className="btn card__btn" onClick={minus} disabled={count==-5 ? true : false}>-</button>
          <button className="btn card__btn" onClick={reboot}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
