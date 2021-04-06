import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer/index';
import Header from './components/Header';
import { Home } from './pages/Home/index';
import Search from './pages/Search';
import Single from './pages/Single';

function App() {
  return (
    <>
      <main>
        <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/templates/:id"} component={Single}/>
          <Route exact path={"/search/:query"} component={Search}/>
        </Switch>
      </main>
      <Footer/>
    </>
    
  );
}

export default App;
