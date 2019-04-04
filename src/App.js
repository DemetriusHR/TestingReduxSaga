import React, { Component } from "react";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { AppContext } from "./Context";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

class App extends Component {
  render() {
    return (
      <Provider context={AppContext} store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
