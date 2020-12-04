import React, {useState} from 'react';
import {SideNavbar} from '../../app/SideNavbar'
import {StoreSection} from '../../app/StoreSection'
export const MenPage = () =>{

   
    const [navbarState, setNavbarState] = useState({
        type:'',
        subtype:''
    })

    return(
        <main className="main-container">
              <SideNavbar setNavbarState={setNavbarState}   />
              <article className="store">
                <section className="top-section" >
                    <h2 className="section-header">new men's clothing</h2>
                </section>
                <StoreSection page="/men" gender="male" navbarState ={navbarState}/>
              </article>
        </main>
    )
}



