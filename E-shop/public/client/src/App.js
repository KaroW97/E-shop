import React from 'react';

import {FrontPage} from './features/pages/frontPage'
import {MenPage} from './features/pages/MenPage'
import {WomenPage} from './features/pages/WomenPage'
import {StoreItemPage} from './features/productPage/StoreItemPage'
import './css/index.css'
import {Navbar} from './app/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
function App() {
  //<Route path="/" component={FrontPage}/>
  return (
      <Router>
        <Navbar/>
  
        <Switch>
          <Route
              exact
              path="/"
              render={() => (
                  <React.Fragment>
                    <FrontPage/>
                  </React.Fragment>
              )}
            />
           <Route exact path="/men" component={MenPage}/>
           <Route exact path="/women" component={WomenPage}/>
           <Route exact path="/store-item-:id"component={StoreItemPage}></Route>
          <Redirect to="" />
        </Switch>
       

        
      </Router>
 
    
  );
}

export default App;
