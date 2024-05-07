import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_PRODUCTS } from './action-types';

import { getListProducts } from '../utils/fetchApi';

const getAllProducts = createAsyncThunk(GET_PRODUCTS, (_, {rejectWithValue}) => {
    return (getListProducts().then(res => res).catch(err => rejectWithValue(err)));
})

export {getAllProducts};