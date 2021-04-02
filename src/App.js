import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer/index';
import Header from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <main>
        <Header/>
        <Switch>
        <Route exact path={"/"} component={Home}/>
        </Switch>
      </main>
      <Footer/>
    </>
    
  );
}

export default App;
