import React, {useState} from 'react';
import {SideNavbar} from '../../app/SideNavbar'
import {StoreSection} from '../../app/StoreSection'

export const WomenPage = () =>{
    const [navbarState, setNavbarState] = useState('') 

    return(
        <main className="main-container">
            <SideNavbar navbarState={navbarState} setNavbarState={setNavbarState}/>
            <article className="store">
                <section className="top-section" >
                    <h2 className="section-header">new women's clothing</h2>
                </section>
                <StoreSection page="/women" gender="female" navbarState ={navbarState}/>
            </article>
        </main>
    )
}



