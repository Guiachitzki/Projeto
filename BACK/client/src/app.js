import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardapioList from './components/CardapioList';
import CardapioForm from './components/CardapioForm';
import EditarItem from './components/EditarItem'; 
import CadastroButton from './components/CadastroButton';

const App = () => {
  return (
    
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <CardapioList />
            <CadastroButton />
          </Route>
        </Switch>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Cardápio</Link>
            </li>
            <li>
              <Link to="/add">Adicionar Item</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route path="/add">
            <CardapioForm />
          </Route>
          <Route path="/edit/:id" component={EditarItem} />
          <Route path="/">
            <CardapioList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};


export default App;