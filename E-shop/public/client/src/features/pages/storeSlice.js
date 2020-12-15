import { createSlice } from '@reduxjs/toolkit';
import {configureStore } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import men from '../../img/men.jpg'
import women from '../../img/women.jpg'
import women2 from '../../img/women2.jpg'

const initialState ={
    items:[
        {
            id:'1', 
            company: 'ONLY & SONS', 
            type:'Odzież',
            subtype:'Jeansy',
            subTypeCategory:'Skiny Fit',
            gender:'kobiety',
            colors:['#6BFA86','#D9A45F','#FC8A6F'],
            products:[
                
                {   id:'2',
                    fav:false,
                    price:190,
                    color:'#6BFA86',
                    size:{
                        'XS':3,
                        'XXS':5, 
                      
                    },
                    images:[women,women2,men]
                },
                {   id:'3',
                    fav:false,
                    price:160,
                    color:'#D9A45F',
                    size:{
                      
                        'L':4,
                        'M' :9,
                    },
                    images:[women,men,women]
                },
                {   id:'4',
                    fav:false,
                    price:300,
                    color:'#FC8A6F',
                    size:{
                       
                        'M' :9,
                       
                    },
                    images:[men,women,women2]
                },
            ]
        },
        {
            id:nanoid(), 
            company: 'Levis', 
            type:'Odzież',
            subtype:'Kurtki',
            subTypeCategory:'Parki',
            gender:'kobiety',
            colors:['#6BFA86','#D9A45F','#FC8A6F'],
            products:[
                
                {   id:nanoid(),
                    fav:false,
                    price:190,
                    color:'#6BFA86',
                    size:{
                        'XS':3,
                        'XXS':5, 
                      
                    },
                    images:[women,women2,men]
                },
                {   id:nanoid(),
                    fav:false,
                    price:160,
                    color:'#D9A45F',
                    size:{
                      
                        'L':4,
                        'M' :9,
                    },
                    images:[women,men,women]
                },
                {   id:nanoid(),
                    fav:false,
                    price:300,
                    color:'#FC8A6F',
                    size:{
                       
                        'M' :9,
                       
                    },
                    images:[men,women,women2]
                },
            ]
        },
        {
            id:nanoid(), 
            company: 'Mustang damskie', 
            type:'Buty',
            subtype:'Botki',
            subTypeCategory:'Sztyblety',
            gender:'kobiety',
           
            colors:['#FF5733','#FFB133','#D733FF'],
            products:[      
                {   id:nanoid(),
                    fav:false,
                    price:220.90,
                    color:'#FF5733',
                    size:{
                      
                        'S' :2,
                        'M':1,
                        'L':4
                    },
                    images:[men,women,women2]
                },
                {   id:nanoid(),
                    fav:false,
                    price:170.90,
                    color:'#FFB133',
                   
                    size:{
                        'XS':5, 
                        'S' :2,
                        'L':4
                    },
                    images:[women,men,women2]
                },
                {   id:nanoid(),
                    fav:false,
                    price:477.90,
                    color:'#D733FF',
                    size:{
                        'XS':5, 
                        'M' :9,
                        'L':4
                    },
                    images:[women,men,women2]
                }
        
                ],
        },
        {
            id:nanoid(), 
            company: 'Mustang męski but', 
            type:'Buty',
            subtype:'Botki',
            subTypeCategory:'Sztyblety',
            gender:'mężczyźni',
           
            colors:['#FF5733','#FFB133','#D733FF'],
            products:[      
                {   id:nanoid(),
                    fav:false,
                    price:220.90,
                    color:'#FF5733',
                    size:{
                      
                        'S' :2,
                        'M':1,
                        'L':4
                    },
                    images:[men,women,women2]
                },
                {   id:nanoid(),
                    fav:false,
                    price:170.90,
                    color:'#FFB133',
                   
                    size:{
                        'XS':5, 
                        'S' :2,
                        'L':4
                    },
                    images:[women,men,women2]
                },
                {   id:nanoid(),
                    fav:false,
                    price:477.90,
                    color:'#D733FF',
                    size:{
                        'XS':5, 
                        'M' :9,
                        'L':4
                    },
                    images:[women,men,women2]
                }
        
                ],
        },
        {
            id:nanoid(), 
            company: 'Levis meski kurtka parka', 
            type:'Odzież',
            subtype:'Kurtki',
            subTypeCategory:'Parki',
            gender:'mężczyźni',
            colors:['#6BFA86','#D9A45F','#FC8A6F'],
            products:[
                
                {   id:nanoid(),
                    fav:false,
                    price:190,
                    color:'#6BFA86',
                    size:{
                        'XS':3,
                        'XXS':5, 
                      
                    },
                    images:[women,women2,men]
                },
                {   id:nanoid(),
                    fav:false,
                    price:160,
                    color:'#D9A45F',
                    size:{
                      
                        'L':4,
                        'M' :9,
                    },
                    images:[women,men,women]
                },
                {   id:nanoid(),
                    fav:false,
                    price:300,
                    color:'#FC8A6F',
                    size:{
                       
                        'M' :9,
                       
                    },
                    images:[men,women,women2]
                },
            ]
        },
    ]

}
const frontPageSlice = createSlice({
    name:"store",
    initialState,
    reducers:{
        decrement: (state,action) =>{ //trzeba to zafniezdzic jutro trzeba uproscic reszte 
           return {items:state.items.map(item=>{ //first item
                //if(item.id !== action.payload.mainid) not sure if needed
                 //  return item
                let product = item.products.map(product =>{ //second item
                    if(product.id.toString() !== action.payload.id)
                        return product
                    let size2 = Object.assign({},product.size) //creating copy
                    size2[action.payload.size]  -=1
                    return{
                        ...product,
                        ...{size:{...size2} } //new size after changes 
                    }
                })
                return{
                    ...item,
                    products:[...product]
                }
            })
           }
        }

    }
})
export const {decrement} =frontPageSlice.actions
export default frontPageSlice.reducer