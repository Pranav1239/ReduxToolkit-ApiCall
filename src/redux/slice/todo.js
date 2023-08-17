import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchtodos = createAsyncThunk('FetchTodo' , async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json();
})

const todoslice = createSlice({
    name : "todoSlice",
    initialState : {
        data : null,
        isLoading : false,
        isError : false
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchtodos.pending , (state , action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchtodos.fulfilled, (state , action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchtodos.rejected , (state , action)=>{
            console.log('error' , action.payload)
            state.isError = true
        })
    }
})

export default todoslice.reducer;