import React from 'react';
import PaysManager from "./containers/PaysManager/PaysManager"
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import NavBarLight from './components/NavBar/NavBarLight';
import UnPays from './containers/UnPays/UnPays';
import Error from './components/Error/Error';
import Error404 from './components/Error/Error404/Error404';
import './App.css'

function Home() {
  return (
    <div>
      <h1 className='border border-dark bg-primary p-2 m-2 rounded text-white text-center' style={{fontFamily: 'Boogaloo cursive'}}>
        Page d'accueil
      </h1>
    </div>
  );
}
function Admin() {
  return (
    <div>
      <h2 className='border border-dark bg-primary p-2 m-2 rounded text-white text-center' style={{fontFamily: 'Boogaloo cursive'}}>
        Page reservée pour l'administrateur
      </h2>
    </div>
  );
}
function App() {
  return (
    <>
    <BrowserRouter basename='/'>
              {/* <Route path="/" component={NavBar}/>
              <Route path="/admin" exact component={NavBarLight} />
              <Route path="/pays" component={NavBar} /> */}
              <NavBar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/pays" exact component={PaysManager} />
                <Route path="/pays/:id" render={(props) => <UnPays nomPays={props.match.params.id} {...props} />} />
                <Route render={(props) => <Error><Error404></Error404></Error>} />
              </Switch>
    </BrowserRouter>
  </>
  )
}

export default App;
