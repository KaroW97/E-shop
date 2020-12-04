import React, {useState} from 'react';
import men from '../img/men.jpg'
import women from '../img/women.jpg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {useSelector} from 'react-redux'

const theme = createMuiTheme({
    typography:{
        textTransform:"none", 
    },
    overrides:{
        MuiCardContent:{
            root:{
                padding: 0,
                "&:last-child": {
                    paddingBottom: 0
                  }
            }
          
        }
    }
})
export const StoreSection = (props) =>{
    const  store_items = useSelector(state => 
        state.store.filter(item=>  
            ( 
                (item.gender == props.gender || item.gender === 'unisex') 
                && (item.type === props.navbarState.type || item.subtype === props.navbarState.subtype)
            ) 
        )
    )
 
    const [enter, setEnter] = useState(true)
    const handleClick = (e) =>{
        const id = e.currentTarget.id
       
     /*   setArr(
         arr.map(item=>
                 item.id === Number(id) ?
                {   ...item,
                    fav: !item.fav
                }  : item       
        ))*/
           
    }
    const handleMouseEnter = () =>{
        setEnter(false)
    }
    const handleMouseLeave = () =>{
        setEnter(true)
        
    }
    return(
        <ThemeProvider theme={theme}>
            <section className="shop">
                {
                     store_items.map((item)=>{
                        return(
                        <Card className="item-in-store"  key={item.id} component={Link} to={enter==true ? `/store-item-${item.id}`: props.page}>
                            <CardContent  className="card-content" >
                                <section id="cf" >
                                    <img  className="bottom "src={women}  alt="women"/>
                                    <div className="element-related-to-bottom-img" id={item.id} 
                                        onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave}
                                        onClick={handleClick} 
                                       >
                                        {!item.fav? 
                                        <span className="material-icons fav-icon icon-border">favorite_border</span>
                                        : 
                                        <span className="material-icons fav-icon red-icon">favorite</span>
                                        }
                                    </div>
                                    <img  className="top" src={men}  alt="men"/>
                                    <address className="creator-information">pl.freepik.com</address>
                                </section>
                                <Typography className="brand-name" variant="h6">{item.company}</Typography>
                                <Typography className="brand-price" variant="subtitle2">{item.price}zł</Typography>
                                <section className="size-color-section">
                                    <article variant="subtitle2" className="size-typography bottom" >
                                        Dostępne{
                                            item.size.map((size, index) =>{
                                                return (
                                                   
                                                    <Typography key={index}variant="subtitle2" className="size"> {size}  </Typography>
                                                
                                                )

                                        } )
                                    }
                                    </article>
                                    <article className="top-dot">
                                    {
                                    item.color.map((color,index) =>{
                                        return(<figure key={index} className="dot " style={{backgroundColor: `${color}`}}></figure>)
                                        })
                                    
                                    }
                                    </article>
                              
                                </section>
                            </CardContent>
                        </Card>
                        )


                            
            
                    })
                }
    
            </section>
        </ThemeProvider>
    )
}

