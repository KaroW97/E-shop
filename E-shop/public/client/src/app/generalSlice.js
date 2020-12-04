import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    'Jeansy':['Skiny Fit', 'Rurki', 'Proste', 'Dzwony'],
    'Bluzy':['Bluzy dresowe', 'Bluzy z kapturem'],
    'Koszulki':['Koszulki','Topy'],
    'Płaszcze':['Płaszcze zimowe', 'Płaszcze wełniane']
}

const generalSlice = createSlice({
    name:'general', 
    initialState,
    reducers:{

    }
})


export default generalSlice.reducer