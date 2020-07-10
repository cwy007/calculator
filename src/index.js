import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import CalculatorComp from './components/CalculatorComp';
import reducerCalculator from './reducers/reducerCalculator';

const store = createStore(reducerCalculator);
const rootEle = document.getElementById('root');

const render = () => ReactDOM.render(
  <CalculatorComp
    s={store.getState()}
    vstore={store}
  />,
  rootEle
)

render();

store.subscribe(render);
