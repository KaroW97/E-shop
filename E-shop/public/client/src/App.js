import React from 'react';

import {FrontPage} from './features/pages/frontPage'
import {MenPage} from './features/pages/MenPage'
import {WomenPage} from './features/pages/WomenPage'
import {StoreItemPage} from './features/productPage/StoreItemPage'
import './css/index.css'
import {Navbar} from './app/Navbar'
import {SideNavbar} from './app/SideNavbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
function App() {
  //<Route path="/" component={FrontPage}/>
  //move subtypes here from men page and women page 
  const [navbarState, setNavbarState] = React.useState({})

  const[page, setPage] = React.useState('kobiety')

  return (
    
      <Router>
      <Navbar page={page} setPage={setPage} setNavbarState={setNavbarState} />
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
             <Route  exact path="/:page/store-item-:id-mainid-:mainid-color-:color"  component={StoreItemPage}></Route>
            <Route exact path={[
             
              "/mezczyzni/:sidebar",
              "/mezczyzni/:sidebar/:subproperty",
              "/mezczyzni/:sidebar/:subproperty/:subtypecategory"
            ]} component={(props)=>
                  <MenPage  
                    page ={page} 
                    match={props.match}
                    />
              }/>
           <Route exact path={[
              
                "/kobiety/:sidebar",
                "/kobiety/:sidebar/:subproperty",
                "/kobiety/:sidebar/:subproperty/:subtypecategory"

                ]} component={(props)=>
                    <WomenPage
                        page ={page} 
                        match={props.match}
                    />}/>
          
           
          <Redirect to="" />
        </Switch>
       

        
      </Router>
 
    
  );
}

export default App;
