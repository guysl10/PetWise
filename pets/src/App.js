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
import Associations from './pages/association';
import home from './pages/home';
import Login from './pages/login';
import Register from "./pages/register";
import Logout from './pages/logout';
import profile from './pages/profile';
import editProfile from './pages/editProfile';
import Search from './components/Search';
import Pets from './pages/pets';
import AdminUsers from './components/AdminUsers';
import Categories from './pages/categories';
import FullPetPost from './pages/fullPetPost';
import Admin2 from './components/Admin';

function App() {
  return (
    <div>

      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/profile" component={profile} />


          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
            
          {/*<Route exact path="/admin" component={Admin} />*/}
           <Route exact path="/admin" component={Admin} />

          <Route exact path="/adminPets" component={AdminPets} />
          <Route exact path="/adminViewPet" component={AdminViewPet} />
          <Route exact path="/adminUsers" component={AdminUsers} />
          <Route exact path="/articles" component={articles} />
          <Route exact path="/adoptionsGallery" component={adoptionsGallery} />
          <Route exact path="/about" component={about} />
          <Route exact path="/pets" component={Pets} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/categories" component={Categories} />
          {/* <Route exact path="/associations" component={Associations} /> */}
          <Route exact path="/editProfile" component={editProfile} />
          <Route exact path="/pets/id/:document_id" component={FullPetPost} />
          products
          
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
