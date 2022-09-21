import React from 'react'
import { Provider } from 'react-redux';
import AppRoutes from './Components/AppRoutes';
import store from './Reducers/Store';

const App = () => {
  return (
   <>
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
   </>
  )
}

export default App;
