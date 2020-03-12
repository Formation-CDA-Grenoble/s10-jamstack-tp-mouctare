import React from 'react';
import RestoList from './components/RestoList'
import RestoPreview from './components/RestoPreview'
import Resto from './components/Resto'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () =>
<BrowserRouter>
  <Container>
    <RestoList />
    <RestoPreview/>
    <Resto/>
  </Container>
    <Container>
      <Switch>
        <Route exact path='/' component={RestoList} />
        <Route exact path='/Resto/:slug' component={Resto} />
        
      </Switch>
    </Container>
  </BrowserRouter>
;

export default App;
