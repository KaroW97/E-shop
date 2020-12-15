import React, {useState} from 'react';
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
 
    const normalize = (item) =>{
        return item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    }
  
    let  store_items = useSelector(state => 
        state.store.items.filter(item=>  {
            const props_match = (props.match.sidebar!=undefined ? props.match.sidebar.toLowerCase() : props.match.sidebar)
            //if gender is the same as page gander and item type is equal to url sidebar type 
            //which was set by clicking on buttons in sidebar 
           return  props.page === normalize(item.gender) && normalize(item.type)  === normalize(props_match)
        })).filter(item=>{
        //if sidebar is equal to item type and subproperty is undefined return item
        //if supproperty from sidebar is equal subproperty of the item and subtypeCategory is undefined return
        //finaly if subtypecategory is equal to item syubtypecategory return
        if(props.match.sidebar === normalize(item.type) && props.match.subproperty===undefined) return item;
        if(props.match.subproperty == normalize(item.subtype)&& props.match.subtypecategory===undefined )  return item
        if(props.match.subtypecategory === normalize(item.subTypeCategory)) return item;
    })

    
    const [enter, setEnter] = useState(true)
    //Fix changing liked or neutral
    const handleClick = (e) =>{
        //const id = e.currentTarget.id
       
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
                    return item.products.map((product,index)=>{
                        return(
                            <Card className="item-in-store"  key={product.id} component={Link}
                            to={`/${props.page}/store-item-${product.id}-mainid-${item.id}-color-${product.color.slice(1)}`} >
                                
                                <CardContent  className="card-content" >
                                    <section id="cf" >
                                        <img  className="bottom "src={product.images[0]}   alt="women"/>
                                        <div className="element-related-to-bottom-img" id={product.id} 
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
                                        <img  className="top" src={product.images[1]}  alt="men"/>
                                        <address className="creator-information">pl.freepik.com</address>
                                    </section>
                                    <Typography className="brand-name" variant="h6">{item.company} </Typography>
                                    <Typography className="brand-price" variant="subtitle2">{product.price.toFixed(2).replace('.00','')}zł</Typography>
                                    <section className="size-color-section">
                                    
                                        <article variant="subtitle2" className="size-typography bottom" >
                                            Dostępne
                                            {
                                                Object.entries(product.size).map((size, index) =>{
                                                    return (
                                                        
                                                        <Typography key={index}variant="subtitle2" className="size"> {size[0]}  </Typography>
                                                    )
                                                })
                                            }
                                        </article>
                                        <article className="top-dot">
                                        {
                                            item.colors.map((color,index) =>{
                                                return(<figure key={index} className="dot " style={{backgroundColor: `${color}`}}></figure>)
                                                })
                                        
                                        }
                                        </article>
                                    </section>
                                </CardContent>
                            </Card>
                        )
                    })
                })
                }
    
            </section>
        </ThemeProvider>
    )

}

