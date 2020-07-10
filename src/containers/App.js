import { connect } from 'react-redux';
import { CalculateType } from '../actions';
import CalculatorComp, { CalculateType } from '../components/CalculatorComp';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    onNumClick: (n1, n2, opr, eq, result) => dispatch({
      type: CalculateType.NUM,
      n1: n1,
      n2: n2,
      opr: opr,
      eq: eq,
      result: result
    }),
    onOprClick: (n1, n2, opr, eq, result) => dispatch({
      type: CalculateType.OPR,
      n1: n1,
      n2: n2,
      opr: opr,
      eq: eq,
      result: result
    }),
    onEqualsClick: (n1, n2, opr, eq, result) => dispatch({
      type: CalculateType.EQUALS,
      n1: n1,
      n2: n2,
      opr: opr,
      eq: eq,
      result: result
    }),
    onClsClick: (n1, n2, opr, eq, result) => dispatch({
      type: CalculateType.CLS,
      n1: n1,
      n2: n2,
      opr: opr,
      eq: eq,
      result: result
    })
  }
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComp);
