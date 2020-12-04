import React,{useState} from 'react';
import promotion from '../../img/promotion.jpg'
import {SideNavbar} from '../../app/SideNavbar'
import {StoreSection} from '../../app/StoreSection'

export const FrontPage = () =>{
// change it for new Section callled MainPageSection
//put there only stuf about new promotions collections and so one
// <StoreSection page="" gender="" navbarState =""/> 
    return(
        <main className="main-container">
            <article className="store">
                <section className="top-section" >
                    <h1 className="section-header-absolute">Promotions</h1>
                    <address className="address-info">
                        pl.freepik.com
                    </address>
                    <img className="promotion-img" alt={`promiotions`} src= {promotion}/>
                </section>
              
                
            </article>
        </main>
    )
}



