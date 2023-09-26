import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        num1: '',
        num2: '',
        result: null,
        error: null,
    },
    reducers: {
        setNum1: (state, action) => {
            state.num1 = action.payload;
        },
        setNum2: (state, action) => {
            state.num2 = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearResult: (state) => {
            state.result = null;
        },
    },
});

export const {
    setNum1,
    setNum2,
    setResult,
    setError,
    clearError,
    clearResult,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
