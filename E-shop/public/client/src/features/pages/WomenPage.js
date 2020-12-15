import React, {useState} from 'react';
import {SideNavbar} from '../../app/SideNavbar'
import {StoreSection} from '../../app/StoreSection'

export const WomenPage = (props) =>{

    return(
        <main className="main-container">
            <SideNavbar page="kobiety" />
            <article className="store">
                <section className="top-section" >
                    <h2 className="section-header">new women's clothing</h2>
                </section>
                <StoreSection page="kobiety" match={props.match.params}  />
            </article>
        </main>
    )
}



