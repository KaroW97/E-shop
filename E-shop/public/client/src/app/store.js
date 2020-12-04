import { configureStore } from '@reduxjs/toolkit';
import PageSlice from '../features/pages/storeSlice'
import generalSlice from './generalSlice'
import frontPageSlice from'../features/pages/frontPageSlice'
export default configureStore({
  reducer: {
   
    store:PageSlice, 
    generalSlice:generalSlice,
    frontPage:frontPageSlice
  },
});
