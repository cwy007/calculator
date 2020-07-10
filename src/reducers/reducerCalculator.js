import { CalculatorType } from '../actions';

const initState = {
  n1: '',
  n2: '',
  opr: '',
  eq: '',
  result: ''
};

var reducerCalculator = (state = initState, action) => {
  switch (action.type) {
    case CalculatorType.NUM:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result
      };
    case CalculatorType.OPR:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result
      };
    case CalculatorType.EQUALS:
      let result;
      switch(action.opr) {
        case 'add':
          result = Number.parseInt(action.n1) + Number.parseInt(action.n2);
          break;
        case 'minux':
          result = Number.parseInt(action.n1) - Number.parseInt(action.n2);
          break;
        case 'multiple':
          result = Number.parseInt(action.n1) * Number.parseInt(action.n2);
          break;
        case 'divide':
          if (Number.parseInt(action.n2 !== 0)) {
            result = Number.parseInt(action.n1) / Number.parseInt(action.n2);
          } else {
            result = Number.NaN;
          }
          break;
        default:
          result = 0;
          break;
      }
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: result
      };
    case CalculatorType.CLS:
      return {
        n1: action.n1,
        n2: action.n2,
        opr: action.opr,
        eq: action.eq,
        result: action.result
      }
    default:
      return state;
  }
};

export default reducerCalculator;
