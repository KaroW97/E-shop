import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import '../../css/store_item.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

import {
    decrement
} from '../pages/storeSlice'
import {
    incrementByAmountBuy
} from '../../app/favListAndToBuyList'

const buttonTheme = createMuiTheme({
    palette: {
        primary:{
            main:'#b930b5'
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
export const StoreItemPage = ({match}) =>{
    let mainid = match.params.mainid
    let id = match.params.id
    let color = match.params.color
   
    const [click, setClick] = useState({
        value:-1,
        size:''
    })
    const [colorCheck, setColorCheck] = useState('#'+color)
  
    const [favClick, setFavClick] =useState(false)
    const [mouseEnter, setMouseEnter] = useState(false)
    const [animationStart, setAnimationStart] = useState(false)
    const [alertPopUp, setAlertPopUp] = useState(false)
  
    let history = useHistory();
    const dispatch = useDispatch()
 
    const store_item = useSelector(state=> 
        state.store.items.find(item=>
            item.id === mainid
    ))
    const this_store_item = store_item.products.find(item=>item.id === id)
    const addAsToBuy = ()=>{
        if(click.value !== -1 && this_store_item.size[click.size] > 0){
            setClick({value:-1, size:''})
            dispatch(
                decrement({
                    mainid:mainid,
                    id:this_store_item.id, 
                    size:click.size,amount:4,
                }),
            )
            dispatch(
                incrementByAmountBuy({
                    mainid:store_item.id, //needed
                    id:this_store_item.id, //needed
                    company:store_item.company, //needed
                    fav:this_store_item.fav, //needed
                    gender:store_item.gender, //needed
                    color:colorCheck, //needed
                    size:[click.size, this_store_item.size[click.size] ], //size needed but not amount
                    price:this_store_item.price, //needed
                    images:this_store_item.images[0],//needed
                    subtype:store_item.subtype,//needed
                    type:store_item.type,//needed
                    page:match.params.page//needed
                }) 
            )
            
        }
        if(click.value == -1 || this_store_item.size[click.size] == 0  ){
            setAlertPopUp(true)  
            setTimeout(()=>{
                setAlertPopUp(false)  
            },3200) 
        }
    }
    const handleColorClick = ( color,url)=>{//If color clicked change url on this where new color inculded
        setColorCheck(color)
        setClick({
            value:-1,
            size:''
        })
        history.push(url)
    }
    const handleFavState = ()=>{//If clicked change favState and mouseEter on oposite 
        setFavClick(!favClick)
        setMouseEnter(!mouseEnter)
        setAnimationStart(true) //if animation true make the behind dot pop up 
    }
    return(
        <section className="main-container item-section">
            <article className="img-article">
                <GridList className="grid-list"  cellHeight={300} >
                {this_store_item.images.map((img, index)=>{
                        return(
                            <GridListTile className={`grid-list-title `} key={index}  
                                rows={index === 0? 2 :1}  cols={index === 0? 2 :1} >
                                <img key={index}   src= {img}   alt="women"/>
                            </GridListTile>    
                        )
                    })
                }
                </GridList>
            </article>
            <article className="product-information">
                <article >
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/women">{store_item.gender}</Link>
                        <Link color="inherit" href="/women">{store_item.type}</Link>
                    </Breadcrumbs>
                    <h3>{store_item.company}</h3>
                </article>  
                <article className="price-article">
                    <h3>{this_store_item.price.toFixed(2).replace('.00','')} zł</h3>
                    <p>w tym VAT</p>
                </article>  
                <article className="color-article" >
                    <h3>Kolory</h3>
                    <article className="colors">
                        {store_item.colors.map((color, index)=>{
                            console.log(color+ '  ' +colorCheck)
                        
                            return(
                                <div>   <figure component={Link} key={index} style={{backgroundColor: `${color}`}}
                                onClick = {()=>handleColorClick(color,`/${store_item.gender}/store-item-${store_item.products[index].id}-mainid-${store_item.id}-color-${color.slice(1)}`)}
                                className={ colorCheck.toString() == color.toString()?"dot dotChecked" :"dot" }>
                                </figure>
                                <p>{color}</p><br></br>
                                </div>
                             
                            )
                            })
                        }
                    </article>
                </article>
                <article className="size-article">
                    <h3>Rozmiary</h3>
                    <article className="sizes">
                    {
                    Object.entries(this_store_item.size).map((size, index)=>{
                      
                      
                        return(  
                            <button key={index} 
                            className={`${ click.value === index ? `size-button clicked` : "size-button "} 
                            ${ size[1] === 0 ?'zero_articles':''}`} 
                            onClick={()=>  setClick({ value:index,size:size[0]})}>
                                {size[0]}
                            </button>
                        )
                    })
                    }
                    </article>
                </article>
                <ThemeProvider theme={buttonTheme}>
                    <article  className="submit-article">
                        {alertPopUp ? <Alert  variant="filled" severity="error" className="alert-error-pop-up">Wybierz Swój rozmiar</Alert> :''}
                        <Button onClick={addAsToBuy} variant="contained" className="submit-button" color="primary">Dodaj</Button>
                        <figure className="fav-element" onClick={handleFavState} 
                            onMouseEnter={()=>setMouseEnter(true)} 
                            onMouseLeave={()=>setAnimationStart(false)}>
                            <figure className={favClick && animationStart ? "poping-dot poping-dot-clicked" : 
                                !favClick && animationStart===true ? "poping-dot poping-dot-un-clicked" : 'poping-dot'} >
                            </figure>
                        {   favClick ? 
                            <span className={mouseEnter? "material-icons  fav-icon icon-border" : "material-icons  fav-icon "} >favorite_border</span>:
                            <span className={mouseEnter? "red material-icons  fav-icon icon-border ": "red material-icons  fav-icon  "} >favorite</span>
                        } 
                        </figure>
                    </article>
                </ThemeProvider>
            </article>
        </section>
    )
}