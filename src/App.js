import logo from './logo.svg';

import Home from './components/home';
import ResultPage from './components/resultPage'
import'./styles/geral.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

}  from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store";


function App() {
  return (
    <Provider store={store} >
    <Router>
      
      <Route  exact path="/" component={Home} />
     
      <Route exact path="/result" component={ResultPage} />
     
    
    </Router>
    </Provider>
    
 
 
  );
}

export default App;
