import React from 'react';
import { createStore, applyMiddleware } from 'redux'; // 1
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux'; //4
import allReducers from './reducer'; // 3
import AppContainer from './AppContainer';

const logger = createLogger({});
const store = createStore(allReducers, {}, applyMiddleware(logger)); // 2
export interface AppProps {
  //..
}

export interface AppState {
  isVisible: boolean;
  text: string;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState;

  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      text: 'RAF',
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;
