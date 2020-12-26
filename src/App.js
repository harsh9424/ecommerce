import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import   AppContainer   from "./containers/AppContainer";
import { store } from "./store/store";
import sagas from "./store/saga/";



sagas.forEach(saga => store.runSaga(saga));

function App() {
  return (
    <Provider store={store}>
          <AppContainer />
    </Provider>      
  );
}

export default App;