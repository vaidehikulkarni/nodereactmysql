//create a redux slice to manage items from the API
import {createSlice} from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items:[],
        status: 'idle',
        error: null,
    },
    reducers:{
        setItems: (state, action)=>{
            state.items = action.payload;
        },
        setStatus: (state, action)=>{
            state.status = action.payload;
        },
        setError: (state, action)=>{
            state.error = action.payload;
        },
    },
});

export const {setItems, setStatus, setError} = itemsSlice.actions;

// Export reducer explicitly as itemsReducer (named export)
export const itemsReducer = itemsSlice.reducer;  // Named export

export default itemsSlice;