import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExchangeList from "./ExchangeList";
import ExchangeDetails from "./ExchangeDetails";
// import { useMediaQuery } from 'react-responsive';

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
