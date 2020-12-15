import {createSlice} from '@reduxjs/toolkit';

const initialState2 = {
    'Bielizna':['Skiny Fit', 'Rurki', 'Proste', 'Dzwony'],
    'Jeansy':['Skiny Fit', 'Rurki', 'Proste', 'Dzwony'],
    'Bluzy':['Bluzy dresowe', 'Bluzy z kapturem'],
    'Koszulki':['Koszulki','Topy'],
    'Płaszcze':['Płaszcze zimowe', 'Płaszcze wełniane']
}
//damskie
const initialState = {
    'Kobiety':{
        'Odzież':{
            'Kurtki':['Kurtki zimowe', 'Parki'],
            'Koszulki & Topy':['Koszulki','Topy'],
            'Bielizna':['Biustonosze','Piżamy'],
            'Jeansy':['Skiny Fit', 'Rurki', 'Proste', 'Dzwony'],
        },
        'Buty':{
            'Botki':['Sztyblety', 'Botki klaszyczne'],
            'Kozaki':['Kozaki klasyczne']
        }
    },
    'Mężczyźni':{
        'Odzież':{
            'Kurtki':['Kurtki zimowe', 'Parki'],
            'Koszulki & Topy':['Koszulki','Topy'],
            'Jeansy':['Skiny Fit', 'Rurki', 'Proste', 'Dzwony'],
        },
        'Buty':{
            'Botki':['Sztyblety', 'Botki klaszyczne'],
        }
    }
    

    
}

const generalSlice = createSlice({
    name:'general', 
    initialState,
    reducers:{

    }
})




export default generalSlice.reducer;
