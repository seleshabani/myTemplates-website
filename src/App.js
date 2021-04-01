import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Home } from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path={"/"} exact component={Home}/>
    </Switch>
  );
}

export default App;
