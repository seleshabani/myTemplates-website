import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/index';
import Header from './components/Header';
import { websiteName } from './config';
import { Home } from './pages/Home/index';
import Search from './pages/Search';
import Single from './pages/Single';
import Particles from "react-tsparticles";
import { ParticlesConfig } from './hooks/particlesConfig';

function App() {
  return (
    <>
    <Particles options={ParticlesConfig}/>
      <main>
        <Header/>
        <Switch>
          <Route exact path={`${websiteName}`} component={Home}/>
          <Route exact path={`${websiteName}/templates/:id`} component={Single}/>
          <Route exact path={`${websiteName}/search/:query`} component={Search}/>
        </Switch>
      </main>
      <Footer/>
    </>
    
  );
}

export default App;
