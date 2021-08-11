import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import PortfolioAlice from './Portfolio-Alice';
import PortfolioMaressa from './Portfolio-Maressa';
import ScrollToTop from './functional_components/ScrollToTop';
import '../css/index.css';

const IndexPage = () => {
  return (
    <BrowserRouter>
      {' '}
      <ScrollToTop>
        <title>Meredith Grubbs | Web Designer and Developer</title>
        <main>
          <Switch>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/portfolio-alice'>
              <PortfolioAlice />
            </Route>
            <Route path='/portfolio-maressa'>
              <PortfolioMaressa />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default IndexPage;
