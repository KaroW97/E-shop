import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import '../css/navbar.css'
import logo from '../img/rect_logo.png'
import {
      RightSectionNavbarHeart ,
      RightSectionNavbarBag,
      RightSectionNavbarUser,
} from './RightSectionNavbar'
import {useSelector} from 'react-redux'

const theme = createMuiTheme({
    palette: {
        primary:{
            main:'#d62dcf'
        },
        secondary: {
          main: '#b930b5 ',
        },
      },
      typography:{
        button:{
            textTransform:"none", 
            fontFamily: 'Raleway-Regular',
        },
    }
})

export const Navbar = (props) =>{
    //TODO: automatic if possible
    const state = useSelector(store=>store.generalSlice)
    const[value, setValue] = useState(0)
    const handleChange = (e, newValue) =>{
        setValue(newValue)
    }
    const onPageChange = (newValue) =>{
       
        props.setPage(newValue)
        setValue(0)
    }
    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="default" className="app-bar">
                <Toolbar className="top-app-bar" >
                    <section className="right-section-top-app-bar" >
                        <Link  onClick={()=>onPageChange('kobiety')} to={'/kobiety/odziez'}>Women</Link>
                        <Link onClick={()=>onPageChange('mezczyzni')}  to={'/mezczyzni/odziez'} >Men</Link>
                    </section>
                    <Link onClick={()=>onPageChange('kobiety')}  to='/'className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <article className="right-side-nav" >
                        <RightSectionNavbarUser />
                        <RightSectionNavbarHeart />
                        <RightSectionNavbarBag />
                    </article> 
                </Toolbar>
              
                <Toolbar className="bottom-app-bar" >
                    {
                        props.page === 'kobiety'?   
                        <Tabs  onChange={handleChange} value={value} indicatorColor="primary" >
                            <Tab className="tab" label="Odzież" to="/kobiety/odziez" component={Link}></Tab>
                            <Tab className="tab" label="Buty" to='/kobiety/buty' component={Link}></Tab> 
                            <Tab className="tab" label="Marki" to="/kobiety/marki" component={Link}></Tab>
                        </Tabs>:
                        <Tabs  onChange={handleChange} value={value} indicatorColor="primary" >
                            <Tab className="tab"label="Odzież" to="/mezczyzni/odziez" component={Link}></Tab>
                            <Tab className="tab" label="Buty" to='/mezczyzni/buty' component={Link}></Tab> 
                            <Tab className="tab" label="Marki" to="/mezczyzni/marki" component={Link}></Tab>
                        </Tabs>

                    }
                   
                </Toolbar>
              
            </AppBar> 
             </ThemeProvider> 
      
        )
}