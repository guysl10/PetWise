import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './components/Admin';
import AdminPets from './components/AdminPets';
import AdminViewPet from './components/AdminViewPet';
import Footer from './components/Footer';
import Header from './components/Header';
import about from './pages/about';
import adoptionsGallery from './pages/adoptionsGallery';
import articles from './pages/articles';
import home from './pages/home';
import login from './pages/login';
import profile from './pages/profile';

function App() {
  return (
    <div>

      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/profile" component={profile} />
          <Route exact path="/login" component={login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/adminPets" component={AdminPets} />
          <Route exact path="/adminViewPet" component={AdminViewPet} />
          <Route exact path="/articles" component={articles} />
          <Route exact path="/adoptionsGallery" component={adoptionsGallery} />
          <Route exact path="/about" component={about} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
