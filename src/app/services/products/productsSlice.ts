import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DetailResponse, Product, ProductsApiProductsListRequest } from '../../../openapi/api';
import { AxiosError } from "axios";
import ApiService from '@/openapi/apiService';
// import { PURGE } from 'redux-persist';

export const productsList = createAsyncThunk<Array<Product>, ProductsApiProductsListRequest, { rejectValue: DetailResponse }>(
    'products/list',
    async (_, thunkApi) => {
        try {
            const response = await ApiService.products().productsList();
            return response.data.results;
        } catch (error: unknown) {
            if (error instanceof AxiosError && error?.response?.data?.detail) {
                return thunkApi.rejectWithValue(error.response?.data);
            } else {
                return thunkApi.rejectWithValue({ detail: "Unknown error"});
            }
        }
    }
);

interface ProductsState {
    products: Array<Product>;
    status: string;
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(productsList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log('successful payload:', action.payload);
                state.products = action.payload;
            })
            .addCase(productsList.rejected, (state) => {
                state.status = 'failed';
            })
            // .addCase(PURGE, () => initialState);
    },
});

export const productsInitialState = initialState;
export default productsSlice.reducer;
