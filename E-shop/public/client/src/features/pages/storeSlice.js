import { createSlice } from '@reduxjs/toolkit';
import {configureStore } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = [
    {
        id:nanoid(), company: 'ONLY & SONS', 
        price:177.90, color:['#FF5733','#FFB133','#D733FF' ], 
        size:['XS', 'S','M','L'], fav:false,
        gender:'female', type:'Jeansy',
        subtype:'Skiny Fit'

     },
    {
        id:nanoid(), company: 'Levis', 
        price:200, color:['#FF5733','#FFB133'], 
        size:['XS', 'S','L'], fav:false,
        gender:'male', type:'Koszulki',
        subtype:'Topy'
    },
    {
        id:nanoid(), company: 'Levis and Company', 
        price:200, color:['#FF5733','#FFB133'], 
        size:['XS', 'S','L'], fav:false,
        gender:'male', type:'Koszulki',
        subtype:'Koszulki'
    },
    {
        id:nanoid(), company: 'Mustang', 
        price:450, color:['#942D9F','#2BFDF7'], 
        size:['XS', 'S','L'], fav:false,
        gender:'unisex', type:'Bluzy',
        subtype:'Bluzy z kapturem'
    }
]


const frontPageSlice = createSlice({
    name:"store",
    initialState,
    reducers:{
        getStoreItems: state =>{

        }
    }
})



export default frontPageSlice.reducer