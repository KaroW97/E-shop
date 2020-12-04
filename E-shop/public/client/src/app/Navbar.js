import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import '../css/navbar.css'
import {
      RightSectionNavbarHeart ,
      RightSectionNavbarBag,
      RightSectionNavbarUser,
    } from './RightSectionNavbar'


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

export const Navbar = () =>{
    const[value, setValue] = useState(0)

  
    const handleChange = (e, newValue) =>{
        setValue(newValue)
    }


    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="default" className="app-bar">
                <Toolbar >
                    <Tabs  onChange={handleChange} value={value} indicatorColor="primary" >
                        <Tab  label="Promotions" to='/' component={Link}></Tab> 
                        <Tab label="Women" to="/women" component={Link}></Tab>
                        <Tab label="Men" to="/men" component={Link}></Tab>
                    </Tabs> 
                    <article className="right-side-nav" 
                   >
                        <RightSectionNavbarUser />
                        <RightSectionNavbarHeart />
                        <RightSectionNavbarBag />
                      
                    </article>
                  
                </Toolbar>
              
            </AppBar> 
          
        </ThemeProvider> 
        )
}