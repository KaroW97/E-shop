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
import {Link} from 'react-router-dom';
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
    const [open, setOpen] = React.useState({})
    const [openSub, setOpenSub] =  React.useState({})
    
    const handleClick = (e,item) => {
        setOpen({
            [item]:!open[item]    
        }) 
    };
    const handleClickSubType = (e,item, category) =>{
    setOpenSub({
        [item]:!openSub[item]
    })
    }
    const normalize = (item) =>{
        return item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }
      const sideNabBarListEdit = Object.entries(generalState).map((forWho, index)=>{
          const for_who = normalize(forWho[0])
          
          return (for_who === props.page )? Object.entries(forWho[1]).map((category, index_category)=>{
            const category_normalize =  normalize(category[0])
            
            const collapsedNavbar =   Object.entries(category[1]).map((product, index_product)=>{
                const product_normalize = normalize(product[0])
              //nested 
                const productNest = product[1].map((p, index_p) =>{
                    const p_normalize = normalize(p)
                    return (
                        <Collapse  in={openSub[product[0].toString()]} key={p+index_p}>
                            <List component="div">
                                <ListItem button 
                                component={Link}
                                 to={`/${for_who}/${category_normalize}/${product_normalize}/${p_normalize}`}>
                                    <ListItemText primary={p}  />
                                </ListItem>
                            </List>
                        </Collapse>
                    )
                })
             
                return(
                    <Collapse in={open[category[0].toString()]} timeout="auto" unmountOnExit key={category[0]+index_product}>
                        <List component="div">
                            <ListItem 
                                component={Link} 
                                to={`/${for_who}/${category_normalize}/${product_normalize}`} button key={category[0]}  
                                button onClick={e=>handleClickSubType(e,product[0])}> 
                                <ListItemText  primary={product[0]}  />
                            </ListItem>
                            {productNest}
                        </List>
                    </Collapse>
                )
                })
                return(
                    <div  key={category[0]}> 
                        <ListItem component={Link} to={`/${for_who}/${category_normalize}`} button key={category[0]} onClick={e=>handleClick(e,category[0])}    >
                            <ListItemText primary={category[0]} className={`${open[category[0].toString()]?"active":""}`}/>
                           
                        </ListItem>
                    {collapsedNavbar}
                </div>
                )

            }) : ''
        })
        return(
        <ThemeProvider theme={theme}>
            <aside className="side-nav-bar">
                <Drawer variant="permanent" anchor="left" className="drawer" >
                    <List>
                    {sideNabBarListEdit}
                    </List>
                </Drawer>
            </aside>
        </ThemeProvider>
    )
}