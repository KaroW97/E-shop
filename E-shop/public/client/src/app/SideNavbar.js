import React  from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from "@material-ui/core/Collapse";
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {useSelector} from 'react-redux'

const theme = createMuiTheme({
      typography:{
        textTransform:"none", 
        fontFamily: '"Raleway-Regular" ',
        useNextVariants: true,
    },
    overrides:{
        
        MuiTypography:{
            body1:{
                fontFamily:'Raleway-Regular !important' ,
            }
        }
     
    }
   
})

export const SideNavbar = (props) =>{
   const generalState = useSelector(state=>state.generalSlice)

    const [open, setOpen] = React.useState({ 
        'Jeansy':false,
        'Bluzy':false,
        'Koszulki':false,
        'Płaszcze':false
    })

    const handleClick = (e,item) => {
        props.setNavbarState({ 
            type:item
        })
        setOpen({
            [item]:!open[item.toString()]    
        });
      };
      const handleClickSubType = (e,item) =>{
        props.setNavbarState({ 
            subtype:item
        })
      }
      const sideNavbarList =  Object.entries(generalState).map((items, index) =>{
         const collapsedNavbar =   items[1].map((item, index)=>{  
               return(
                <Collapse in={open[items[0].toString()]}  timeout="auto" unmountOnExit key={item+index}> 
                    <List component="div" disablePadding >
                        <ListItem button  className="collapsed-list" onClick={e=>handleClickSubType(e,item)} >
                            <ListItemText primary={item}  />
                        </ListItem>
                    </List>
                </Collapse>
               ) 
            })
        return(
            <div  key={items[0]}> 
                <ListItem  button key={items[0]} onClick={e=>handleClick(e,items[0])}   >
                    <ListItemText primary={items[0]} className={`${open[items[0].toString()]?"active":""}`}/>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {collapsedNavbar}
            </div>
        )
      })

          return(
            <ThemeProvider theme={theme}>
                <aside className="side-nav-bar">
                    <Drawer variant="permanent" anchor="left" className="drawer" >
                        <List>
                        {sideNavbarList}
                        </List>
                    </Drawer>
                </aside>
            </ThemeProvider>
    )
}