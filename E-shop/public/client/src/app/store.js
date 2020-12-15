import { configureStore } from '@reduxjs/toolkit';
import PageSlice from '../features/pages/storeSlice'
import generalSlice from './generalSlice'
import frontPageSlice from'../features/pages/frontPageSlice'
import favListAndToBuyList from'./favListAndToBuyList'
export default configureStore({
  reducer: {
   
    store:PageSlice, 
    generalSlice:generalSlice,
    favListAndToBuyList:favListAndToBuyList,
    frontPage:frontPageSlice,
   
  },
});
