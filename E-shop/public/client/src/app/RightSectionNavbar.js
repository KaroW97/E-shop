import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Badge from '@material-ui/core/Badge';
import { MenuItem } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';

const timeout = 100
export const RightSectionNavbarHeart = (props =>{
    const [open, setOpen ]=React.useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const handleMouseEnter = (e) =>{
        setOpen(true)
    }
    const handleMouseLeave = () =>{
        setTimeout(()=>{
            setOpen(false)
        },timeout)
        
    }
    const handleMouseEnterMenu = () =>{
        setOpenMenu(true)
    }
    const handleMouseLeaveMenu = () =>{
        setTimeout(() => {
            setOpenMenu(false)
        },timeout)
    }
    const closeWindow = () =>{
        setOpen(false)
        setOpenMenu(false)
    }
     const heartMenu = (
        <Grow in={openMenu || open} className="grow-box" 
            style={{ transformOrigin: '0 0 0' }}
            onMouseEnter={handleMouseEnterMenu }
            {...(openMenu || open? { timeout: 200 } : {})}
            onMouseLeave={handleMouseLeaveMenu}
           >
            <Card >
                <CardContent className="article-right-side-navbar fav-section">
                    <section className="article-right-side-navbar-header fav-section-header " >
                        <h4>Twoja list życzeń</h4>    
                    </section>
                    <hr/>
                    <section className="icon-section">
                    </section>
                    <hr/>
                    <section className="button-section">
                        <Button 
                            variant="contained"  
                            color="secondary" 
                            aria-label="login button"
                            onClick={closeWindow} 
                            className="article-right-side-navbar-button"> 
                            Do Listy życzeń
                        </Button>   
                    </section>
            </CardContent>
            </Card>
        </Grow>
     )
     return(
             <div className="nav-bar-pop-up-element">
                <Badge className="icon-separation"
                    badgeContent={4} 
                    showZero
                    color="primary"    
                    name="heart"   
                    aria-controls="heart-menu" 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave} 
                   >
                    <span className="material-icons">favorite_border</span>
                </Badge>
                {heartMenu}
             </div>
     )

}) 
export const RightSectionNavbarBag = (props =>{

    const [open, setOpen ]=React.useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const handleMouseEnter = (e) =>{
        setOpen(true)
    }
    const handleMouseLeave = () =>{
        setTimeout(()=>{
            setOpen(false)
        },timeout)
        
    }
    const handleMouseEnterMenu = () =>{
        setOpenMenu(true)
    }
    const handleMouseLeaveMenu = () =>{
        setTimeout(() => {
            setOpenMenu(false)
        },timeout)
    }
    const closeWindow = () =>{
        setOpen(false)
        setOpenMenu(false)
    }
    const bagMenu = (
        <Grow
            in={openMenu || open} className="grow-box" 
            style={{ transformOrigin: '0 0 0' }}
            onMouseEnter={handleMouseEnterMenu }
            {...(openMenu || open? { timeout: 400 } : {timeout: 400})}
            onMouseLeave={handleMouseLeaveMenu}
        >
            <Card >
                <CardContent className="article-right-side-navbar fav-section">
                    <section className="article-right-side-navbar-header bag-section-header">
                        <h4>Twój koszyk jest pusty</h4>
                    </section>
                        <hr/>
                    <section className="icon-section">
                    
                    </section>
                        <hr/>
                    <section className="button-section">
                        <Button 
                            variant="contained"  
                            color="secondary" 
                            aria-label="login button"
                            onClick={closeWindow}
                            className="article-right-side-navbar-button">  
                            Znajdź nowe produkty
                        </Button>   
                    </section>

                </CardContent>
            </Card>
          
        </Grow>
     )
    return(
        <div className="nav-bar-pop-up-element">
            <Badge 
                className="icon-separation"
                badgeContent={0} 
                showZero
                color="primary"  
                name="bag" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
               > 
                <LocalMallOutlinedIcon/>
            </Badge>
    
            {bagMenu}
        </div>
    )
})
export const RightSectionNavbarUser = (props =>{
 
    const [open, setOpen ]=React.useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const handleLoggedIn = ()=>{
        setOpen(false)
        setOpenMenu(false)
        setTimeout(()=>{
            setLoggedIn(!loggedIn)
        },200)
    }
    const handleMouseEnter = (e) =>{
        setOpen(true)
    }
    const handleMouseLeave = () =>{
        setTimeout(()=>{
            setOpen(false)
        },timeout)
        
    }
    const handleMouseEnterMenu = () =>{
        setOpenMenu(true)
    }
    const handleMouseLeaveMenu = () =>{
        setTimeout(() => {
            setOpenMenu(false)
        },timeout)
    }
    const handleClose = () =>{
        setOpen(false)
        setOpenMenu(false)
    }
    const  logedIn = (
        <article className="article-logged-pop-up" >
            <section className="logged-in-pop-up">
            
                    <MenuItem onClick={handleClose}> <span className="material-icons">shopping_cart</span>Zamówienia</MenuItem>
                    <MenuItem onClick={handleClose}><span className="material-icons">settings</span>Ustawienia</MenuItem>
                    <MenuItem onClick={handleClose}><span className="material-icons">chat_bubble_outline</span>Pomoc</MenuItem>
            </section>
            <hr/>
            <section className="logout-section">
                <MenuItem onClick={handleLoggedIn}>Wyloguj się</MenuItem>
            </section>
        </article>
    )
    const notLogedIn = (
        <article className=" article-right-side-navbar user-section" >
            <section className=" article-right-side-navbar-header">
                <h3>Nie jesteś zalogowany</h3>
                <Button 
                    variant="contained"  
                    color="secondary" 
                    aria-label="login button"
                    className=" article-right-side-navbar-button"
                    onClick={handleLoggedIn}>  Zaloguj się</Button>
            </section>
            <hr/>
            <section className="icon-section">
                <article className="trolley-icon">
                    <span className="material-icons">shopping_cart</span>
                    <h5>Śledź Swoje zamówienia</h5>
                </article>
                <article className="heart-icon">
                    <span className="material-icons">favorite_border</span>
                    <h5>Twoje ulubione</h5>
                </article>
            </section>
        </article>
    )
    const avatarMenu = (
        <Grow
            in={open ||openMenu}
            onMouseEnter={handleMouseEnterMenu }
            onMouseLeave={handleMouseLeaveMenu}
            {...(openMenu || open? { timeout: 200 } : {})}
            className="grow-box" 
        >
            <Card >
                <CardContent className="article-right-side-navbar fav-section">
                    {!loggedIn  ?   notLogedIn  :   logedIn}
                </CardContent>
            </Card>
           
        </Grow>
    )


    return(
        
        <div className="nav-bar-pop-up-element">
            <Badge 
                badgeContent={0}
                name="avatar"
                onMouseEnter={handleMouseEnter }
                onMouseLeave={handleMouseLeave}
                aria-label="account of current user" 
                className="avatar-icon icon-separation">  
                <span   className="material-icons">person_outline</span> 
            </Badge>
            {avatarMenu}
        </div>
       
    )
})
