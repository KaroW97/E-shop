import React, {useState} from 'react';
import {SideNavbar} from '../../app/SideNavbar'
import {StoreSection} from '../../app/StoreSection'
export const MenPage = (props) =>{

    return(
        <main className="main-container " >
              <SideNavbar page="mezczyzni"   />
              <article className="store">
                <section className="top-section" >
                    <h2 className="section-header">new men's clothing</h2>
                </section>
                <StoreSection page="mezczyzni"  match={props.match.params}/>
              </article>
        </main>
    )
}



