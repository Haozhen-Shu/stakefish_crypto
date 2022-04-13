import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExchangeList from './ExchangeList';
import ExchangeDetails from './ExchangeDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <ExchangeList />
        </Route>
        <Route path='/:id' exact={true}>
          <ExchangeDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  
  );
}

export default App;
