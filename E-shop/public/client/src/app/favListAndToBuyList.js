import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    buy:{
        count:0, 
        buyElements:[]
    },
    fav:{
        count:0, 
        favElements:[]
    },
}
const favListAndToBuyList = createSlice({
    name:'favList', 
    initialState,
    reducers:{
        incrementFav: state =>{
            state.buy.count += 1
        },
        decrementFav:state=>{
            state.buy.count -= 1
        },
        incrementByAmountBuy:(state,action)=>{
            state.buy.count +=1
            state.buy.buyElements.push(action.payload)
        }

    }

})
export const {incrementFav,decrementFav, incrementByAmountBuy} = favListAndToBuyList.actions;
export const selectFav = state => state.favList;
export default favListAndToBuyList.reducer;