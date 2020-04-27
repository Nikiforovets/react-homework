import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={rnd}>rand</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(actions.inc()),
    dec: () => dispatch(actions.dec()),
    rnd: () => dispatch(actions.rnd())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
